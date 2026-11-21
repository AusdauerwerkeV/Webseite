// @ts-check
import { defineConfig } from 'astro/config';

const repositoryName = 'Webseite';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
	site: 'https://ausdauerwerkev.github.io',
	base: isGitHubActions ? `/${repositoryName}` : '/',
});
