import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: "class",
	content: [
		"./src/app/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/lib/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(0 0% 100%)",
				foreground: "hsl(222.2 84% 4.9%)",
				primary: {
					DEFAULT: "hsl(221.2 83.2% 53.3%)",
					foreground: "hsl(210 40% 98%)",
				},
			},
			container: { center: true, padding: "1rem" },
		},
	},
	plugins: [],
}

export default config 