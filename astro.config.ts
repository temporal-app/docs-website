// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/docs': '/docs/getting-started',
	},
	integrations: [
		starlight({
			title: 'Temporal Docs',
			logo: {
				src: './src/assets/temporal-logo.svg'
			},
			social: {
				github: 'https://github.com/temporal-app/docs-website',
				twitter: 'https://twitter.com/tmprlapp',
				'x.com': "https://x.com/tmprlapp",
			},
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			head: [
				{
					tag: "script",
					attrs: {
						async: true,
						src: "https://www.googletagmanager.com/gtag/js?id=G-8P3ZWGQ101"
					}
				}, 
				{
					tag: "script",
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-8P3ZWGQ101');
					`
				}
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting started', link: 'docs/getting-started' },
						{ label: 'Concepts', link: 'docs/concepts' },
					],
				},
				{
					label: 'Administrator guides',
					items: [
						{ label: "Workspaces", link: "/docs/workspaces" },
						{ label: "Managing members", link: "/docs/managing-members" },
						{ label: "Managing teams", link: "/docs/managing-teams" },
						{ label: "Managing event categories", link: "/docs/managing-event-categories" },
						{ label: "Managing event types", link: "/docs/managing-event-types" },
						{ label: "Managing group events", link: "/docs/managing-group-events" },
						{ label: "Billing and plans", link: "/docs/billing-and-plans" },
						{ label: "Audit log", link: "/docs/audit-log" },
					]
				},
				{
					label: 'User guides',
					items: [
						{ label: "Creating events", link: "/docs/creating-events" },
						{ label: "Configuring calendars", link: "/docs/configuring-calendars" },
						{ label: "Capacity", link: "/docs/capacity" },
					]
				},
			],
		}),
	],
});
