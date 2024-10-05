// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://" + import.meta.env.VITE_DOMAIN_NAME,
	base: '/docs',
	redirects: {
		'/': '/docs/getting-started',
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
						src: "https://www.googletagmanager.com/gtag/js?id=G-QD7ETZPVHE"
					}
				},
				{
					tag: "script",
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-QD7ETZPVHE');
					`
				}
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting started', link: '/getting-started' },
						{ label: 'Concepts', link: '/concepts' },
					],
				},
				{
					label: 'Administrator guides',
					items: [
						{ label: "Workspaces", link: "workspaces" },
						{ label: "Managing members", link: "/managing-members" },
						{ label: "Managing teams", link: "/managing-teams" },
						{ label: "Managing event categories", link: "/managing-event-categories" },
						{ label: "Managing event types", link: "/managing-event-types" },
						{ label: "Managing group events", link: "/managing-group-events" },
						{ label: "Billing and plans", link: "/billing-and-plans" },
						{ label: "Audit log", link: "/audit-log" },
					]
				},
				{
					label: 'User guides',
					items: [
						{ label: "Creating events", link: "/creating-events" },
						{ label: "Configuring calendars", link: "/configuring-calendars" },
						{ label: "Capacity", link: "/capacity" },
					]
				},
			],
		}),
	],
});
