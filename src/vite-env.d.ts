/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DOMAIN_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}