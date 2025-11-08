import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { getServerLanguage } from '@/lib/getServerLanguage';
import LocaleLink from '@/components/navigation/LocaleLink';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  source: string;
  category: string;
  content: string;
}

async function getNews(language: 'zh' | 'en'): Promise<NewsItem[]> {
  const newsDir = path.join(process.cwd(), 'src/content/news');

  if (!fs.existsSync(newsDir)) {
    return [];
  }

  const folders = fs.readdirSync(newsDir).filter(item => {
    const itemPath = path.join(newsDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const news = folders.map(folder => {
    const filePath = path.join(newsDir, folder, `${language}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      slug: folder,
      title: data.title,
      date: data.date,
      description: data.description || '',
      source: data.source,
      category: data.category,
      content: content
    };
  })
  .filter((item): item is NewsItem => item !== null)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return news;
}

export default async function NewsPage() {
  const language = await getServerLanguage();
  const isZh = language === 'zh';
  const news = await getNews(language);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white border-b-2 border-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-block px-6 py-2 bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold tracking-wider">
              {isZh ? '实时财经资讯' : 'Real-Time Financial News'}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-black">
              {isZh ? '外汇新闻' : 'Forex News'}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isZh
              ? '每日更新全球外汇市场最新动态，助您把握交易机会'
              : 'Daily updates on global forex market news to help you seize trading opportunities'}
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {news.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {isZh ? '暂无新闻内容，系统将自动更新...' : 'No news yet, system will update automatically...'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {news.map((item) => (
              <div
                key={item.slug}
                className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold">
                    {item.source}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(item.date).toLocaleString(isZh ? 'zh-CN' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>

                <LocaleLink href={`/news/${item.slug}`}>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:underline">
                    {item.title}
                  </h2>
                </LocaleLink>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-4">
                  <LocaleLink
                    href={`/news/${item.slug}`}
                    className="text-sm font-bold hover:underline text-gray-900 dark:text-white"
                  >
                    {isZh ? '阅读原文' : 'Read More'} →
                  </LocaleLink>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Note */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>{isZh ? '自动更新：' : 'Auto Update:'}</strong>
            {isZh
              ? ' 本页面内容由系统自动抓取并生成，每天更新3次（北京时间 8:00、14:00、20:00）。'
              : ' Content is automatically fetched and generated, updated 3 times daily (8:00, 14:00, 20:00 Beijing Time).'}
          </p>
        </div>
      </div>
    </div>
  );
}
