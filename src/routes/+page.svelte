<script lang="ts">
	import { restClient } from '@polygon.io/client-js';

	const rest = restClient('SnQGdKhpyaVbWPVHi3mabHFmE6TPcCyX');
	let ddd:any = [];
	rest.stocks
		.aggregates('AAPL', 1, 'day', '2023-01-01', '2023-04-14')
		.then((data) => {
			// console.log(typeof(data));
			ddd.push(data)
		})
		.catch((e) => {
			console.error('An error happened:', e);
		});
	console.log(ddd[0])
</script>

<svelte:head>
	<title>Crypto Sveltekit App</title>
	<meta name="description" content="Crypto sveltekit app" />
</svelte:head>

<section>
	<h1>example list</h1>
	<!-- <ul>
		{#each ddd as fuck}
		<li>
			{fuck.ticker}	
		</li>
		{/each}
	</ul> -->
</section>
