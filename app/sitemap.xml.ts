export async function getServerSideProps(res: {
  setHeader: (arg0: string, arg1: string) => void;
  write: (arg0: string) => void;
  end: () => void;
}) {
  const baseUrl = "http://localhost:3000/"; // change to your actual domain

  const staticPages = ["", "/about", "/collection"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
