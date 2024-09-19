import { sql } from "@vercel/postgres";

export async function getAllNews() {
  return await sql`SELECT * FROM "news"`;
}

export async function getNewsItem(slug) {
  const result = await sql`SELECT * FROM news WHERE slug = ${slug}`;
  return result.rows?.[0];
}

export async function getLatestNews() {
  return sql`SELECT * FROM "news" ORDER BY date DESC LIMIT 3`;
}

export async function getAvailableNewsYears() {
  const result =
    await sql`SELECT DISTINCT TO_CHAR(date, 'YYYY') AS year FROM news`;

  return result.rows.map((row) => row.year);
}

export async function getAvailableNewsMonths(year) {
  const result =
    await sql`SELECT DISTINCT TO_CHAR(date, 'MM') as month FROM news WHERE TO_CHAR(date, 'YYYY') = ${year}`;
  return result.rows.map((row) => row.month);
}

export async function getNewsForYear(year) {
  const result =
    await sql`SELECT * FROM news WHERE TO_CHAR(date, 'YYYY') = ${year} ORDER BY date DESC`;

  console.log(result);

  return result.rows;
}

export async function getNewsForYearAndMonth(year, month) {
  const result =
    await sql`SELECT * FROM news WHERE TO_CHAR(date, 'YYYY') = ${year} AND TO_CHAR(date, 'MM') = ${month} ORDER BY date DESC`;

  return result.rows;
}
