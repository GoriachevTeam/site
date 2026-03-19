import { generateSitemapXml } from "@/lib/sitemap-gen";

export async function GET() {
  const xml = await generateSitemapXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=3600",
    },
  });
}
