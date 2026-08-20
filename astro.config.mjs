// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://www.example.com",
	image: {
		domains: ["picsum.photos"],
		remotePatterns: [{ protocol: "https", hostname: "**.picsum.photos" }],
	},

	integrations: [icon()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Sometype",
			cssVariable: "--font-sometype",
			fallbacks: ["monospace"],
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Sometype-Mono.woff2"],
						weight: 400,
						style: "normal",
						display: "swap",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "SuisseBPIntl",
			cssVariable: "--font-suisse",
			fallbacks: ["sans-serif"],
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/SuisseBPIntl-Light.woff2"],
						weight: 300,
						style: "normal",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/SuisseBPIntl-Regular.woff2"],
						weight: 400,
						style: "normal",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/SuisseBPIntl-Medium.woff2"],
						weight: 500,
						style: "normal",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/SuisseBPIntl-Bold.woff2"],
						weight: 700,
						style: "normal",
						display: "swap",
					},
				],
			},
		},
	],
});
