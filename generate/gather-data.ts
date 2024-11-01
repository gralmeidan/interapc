import * as fs from 'fs/promises';

async function getQuery(query: string) {
	const url = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1648&q=' + query;
	const options = { method: 'GET' };

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

const terms = [
	'',
	'AMD',
	'Intel',
	'Ryzen',
	'Radeon',
	'Nvidia',
	'BioStar',
	'Gigabyte',
	'Asus',
	'Acer',
	'Noctua',
	'Placa mãe',
	'Gabinete',
	'Water Cooler',
	'Monitor',
	'Placa de vídeo',
	'Memória RAM',
	'SSD',
	'HD',
	'Kingston'
];

const results = [];

for (const q of terms) {
	console.log('Searching', q);

	results.push(await getQuery(q));
}

fs.writeFile('./dump.json', JSON.stringify(results, null, 2));
