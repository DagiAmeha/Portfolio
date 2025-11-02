import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://your-domain.com"
	return [
		{ url: `${base}/`, changeFrequency: "weekly", priority: 1 },
		{ url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/projects`, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
	]
} 