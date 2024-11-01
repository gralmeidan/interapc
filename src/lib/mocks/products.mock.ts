import type { Category, Price, Product } from '$lib/types';
import raw from './products.mock.json';

let highestPrice = 0;

const fixPrice = (price: Price) => {
	if (price.endsAt) {
		price.endsAt = new Date(price.endsAt);
	}

	if (price.amount > highestPrice) {
		highestPrice = price.amount;
	}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const map: { [key in Category]: Product[] } = {} as any;

for (const element of raw) {
	fixPrice(element.displayPrice as Price);

	for (const price of element.prices) {
		fixPrice(price as Price);
	}

	map[(element as Product).category] ??= [];
	map[(element as Product).category].push(element as Product);
}

export const productsMock = {
	all: raw as Product[],
	cat: map,
	highestPrice
};
