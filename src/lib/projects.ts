export type Project = {
	title: string
	description: string
	image: string
	github?: string
	demo?: string
	tags?: string[]
}

export const projects: Project[] = [
	{
		title: "Project One",
		description: "Description of project one.",
		image: "/projects/p1.jpg",
		github: "https://github.com/your/repo",
		demo: "https://your-demo.com",
		tags: ["Next.js", "TypeScript", "Tailwind"],
	},
	{
		title: "Project Two",
		description: "Description of project two.",
		image: "/projects/p2.jpg",
		tags: ["Node", "API"],
	},
] 