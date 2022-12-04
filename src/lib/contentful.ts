import { createClient } from 'contentful';

export const buildClient = () => {
	const client = createClient({
		space: process.env.CONTENT_SPACE_ID || '',
		accessToken: process.env.CONTENT_ACCESS_TOKEN || '',
	});

	return client;
};
