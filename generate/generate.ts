import { Result, Root } from './dump.type';
import { Product, Price, Seller, Category } from '../src/lib/types';
import * as fs from 'fs/promises';

const json: Root[] = await Bun.file('./dump.json').json();

const ids = new Set();
const parsed: Product[] = [];

function randomNum(min: number, max: number) {
	return min + Math.random() * (max - min);
}

function generatePrice(seller: Seller, base: number) {
	const price: Price = {
		amount: base * randomNum(0.7, 1.4),
		seller
	};

	if (Math.random() >= 0.7) {
		const discount = randomNum(0.3, 0.99);

		price.originalPrice = price.amount;
		price.amount = price.amount * discount;
		price.discount = Math.round((1 - discount) * 100);

		if (Math.random() >= 0.5) {
			const hours = 60 * 60 * 1000;
			const expiresIn = randomNum(2 * hours, 12 * 24 * hours);

			price.endsAt = new Date(Date.now() + expiresIn);
		}
	}

	return price;
}

function generatePrices(result: Result): [Price, Price[]] {
	const sellers: Seller[] = ['Amazon', 'Kabum', 'Mercado Livre', 'Pichau', 'Terabyte'];

	const prices: Price[] = [];
	let cheapest: Price | null = null;

	for (const seller of sellers) {
		const price = generatePrice(seller, result.original_price ?? result.price);

		cheapest ??= price;

		if (cheapest.amount > price.amount) {
			cheapest = price;
		}

		prices.push(price);
	}

	return [cheapest as Price, prices];
}

const domains = new Set();

for (const obj of json) {
	for (const result of obj.results) {
		if (ids.has(result.id)) {
			continue;
		}

		ids.add(result.id);

		const [displayPrice, prices] = generatePrices(result);

		parsed.push({
			id: result.id,
			title: result.title,
			thumbnail: result.thumbnail,
			displayPrice,
			category: result.domain_id as Category,
			prices
		});
	}
}

console.log(domains);

await fs.writeFile(
	'mock.json',
	JSON.stringify(
		parsed.sort(() => Math.random() - Math.random()),
		null,
		2
	)
);
