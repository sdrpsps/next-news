import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const { rows: news } = await getAllNews();

  return (
    <>
      <h1>The News Page</h1>
      <NewsList news={news} />
    </>
  );
}
