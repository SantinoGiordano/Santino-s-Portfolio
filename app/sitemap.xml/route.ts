const domain = "santino-portfolio-flame.vercel.app";

const generateSitemap = async () => {
  const now = new Date().toISOString();
  return `
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>https://${domain}/</loc>
			<lastmod>${now}</lastmod>
		</url>
		<url>
			<loc>https://${domain}/about</loc>
			<lastmod>${now}</lastmod>
		</url>
        		<url>
			<loc>https://${domain}/collection</loc>
			<lastmod>${now}</lastmod>
		</url>
	</urlset>
	`;
};

export async function GET() {
  const response = new Response(await generateSitemap());
  response.headers.append("Content-Type", "text/xml");
  return response;
}
