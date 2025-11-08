import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServerLanguage, generateBilingualMetadata } from '@/lib/getServerLanguage';
import LocaleLink from '@/components/navigation/LocaleLink';

interface NewsPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

async function getNewsContent(slug: string, language: 'zh' | 'en') {
  const newsDir = path.join(process.cwd(), 'src/content/news', slug);
  const filePath = path.join(newsDir, `${language}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    keywords: data.keywords,
    category: data.category,
    source: data.source,
    content: content
  };
}

export async function generateMetadata({ params }: NewsPageProps) {
  const { slug, locale } = await params;
  const language = locale === 'en' ? 'en' : 'zh';

  const newsZh = await getNewsContent(slug, 'zh');
  const newsEn = await getNewsContent(slug, 'en');

  if (!newsZh || !newsEn) {
    return {
      title: language === 'zh' ? '新闻未找到' : 'News Not Found'
    };
  }

  return generateBilingualMetadata(
    newsZh.title + ' - FX Killer',
    newsEn.title + ' - FX Killer',
    newsZh.description,
    newsEn.description,
    newsZh.keywords.join(', '),
    newsEn.keywords.join(', '),
    language,
    {
      url: `/news/${slug}`,
      type: 'article',
      publishedTime: newsZh.date,
      modifiedTime: newsZh.date,
      section: newsZh.category
    }
  );
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug, locale } = await params;
  const language = locale === 'en' ? 'en' : 'zh';
  const isZh = language === 'zh';

  const news = await getNewsContent(slug, language);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <LocaleLink
            href="/news"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-6"
          >
            ← {isZh ? '返回新闻列表' : 'Back to News'}
          </LocaleLink>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold">
              {news.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {news.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{news.source}</span>
            <span>•</span>
            <span>
              {new Date(news.date).toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div
            className="text-gray-800 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: news.content.replace(/\n/g, '<br/>')
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {news.keywords.map((keyword: string) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <LocaleLink
            href="/news"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            {isZh ? '查看更多新闻' : 'View More News'}
          </LocaleLink>
        </div>
      </article>
    </div>
  );
}
