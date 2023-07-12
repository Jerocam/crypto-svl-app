import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		const response = await fetch(
			'https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=SnQGdKhpyaVbWPVHi3mabHFmE6TPcCyX'
		);

		const data = await response.json();

		return { data };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
