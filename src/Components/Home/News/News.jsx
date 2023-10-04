import { useEffect, useState } from "react";
import NewsCard from "../../NewsCard/NewsCard";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div className="space-y-4">
        {news.map((post) => (
          <NewsCard key={post._id} post={post}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
