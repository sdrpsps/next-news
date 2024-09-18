import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const year = params.year;
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
