export type Seller = 'Kabum' | 'Terabyte' | 'Mercado Livre' | 'Pichau' | 'Amazon';

export interface Price {
	seller: Seller;
	amount: number;
	originalPrice?: number;
	discount?: number;
	promo?: string;
	endsAt?: Date;
}

export interface Product {
	id: string;
	title: string;
	thumbnail: string;
	displayPrice: Price;
	prices: Price[];
}
