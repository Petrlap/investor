import React, { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  desc: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface NewsResponse {
  module_info: {
    name: string;
    code: string;
  };
  items: NewsItem[];
}

const MarketOverview: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://digital-webspace.ru/api/news")
      .then((response) => response.json())
      .then((data: NewsResponse) => {
        if (data.items) setNews(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  return (
    <div>
      <h2>Новости</h2>
      {news.length > 0 ? (
        <ul>
          {news.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <small>{new Date(item.created_at).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>Новостей пока нет.</p>
      )}
    </div>
  );
};

export { MarketOverview };
