import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NewsPageClient from './NewsPageClient';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  source: string;
  category: string;
  keywords: string[];
}

interface NewsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

async function getAllNews(language: 'zh' | 'en'): Promise<NewsItem[]> {
  const newsDir = path.join(process.cwd(), 'src/content/news');
  const allNews: NewsItem[] = [];

  if (!fs.existsSync(newsDir)) {
    return [];
  }

  const folders = fs.readdirSync(newsDir).filter(item => {
    const itemPath = path.join(newsDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  for (const folder of folders) {
    const filePath = path.join(newsDir, folder, `${language}.md`);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      allNews.push({
        slug: folder,
        title: data.title,
        date: data.date,
        description: data.description || '',
        source: data.source,
        category: data.category,
        keywords: data.keywords || []
      });
    }
  }

  // Sort by date descending
  allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allNews;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  const language = locale === 'en' ? 'en' : 'zh';
  const allNews = await getAllNews(language);

  return <NewsPageClient initialNews={allNews} />;
}
