export class FiltersState {
	private _query = $state('');
	private _seller = $state([] as string[]);
	private _mem = $state([] as string[]);
	private _brand = $state([] as string[]);
	private _platform = $state([] as string[]);
	private _memType = $state([] as string[]);
	private _storageType = $state([] as string[]);
	private _socket = $state([] as string[]);
	private _frequency = $state([] as string[]);

	private _getListValue(url: URLSearchParams, key: string, value: string[]): string[] {
		if (value.length) {
			return value;
		}

		const list = url.get(key);

		if (list) {
			const items = list.split(',');
			return items;
		}

		return [];
	}

	public reset() {
		this._query = '';
		this._seller = [];
		this._mem = [];
		this._brand = [];
		this._platform = [];
		this._memType = [];
		this._storageType = [];
		this._socket = [];
		this._frequency = [];
		this.updateUrl();
	}

	public retrieveUrl() {
		const urlQuery = new URLSearchParams(window.location.search);

		this._query = this._query || urlQuery.get('q') || '';
		this._seller = this._getListValue(urlQuery, 'seller', this._seller);
		this._mem = this._getListValue(urlQuery, 'mem', this._mem);
		this._brand = this._getListValue(urlQuery, 'brand', this._brand);
		this._platform = this._getListValue(urlQuery, 'platform', this._platform);
		this._memType = this._getListValue(urlQuery, 'memType', this._memType);
		this._storageType = this._getListValue(urlQuery, 'storageType', this._storageType);
		this._socket = this._getListValue(urlQuery, 'socket', this._socket);
		this._frequency = this._getListValue(urlQuery, 'frequency', this._frequency);

		this.updateUrl();
	}

	public updateUrl() {
		if (!window.location.pathname.endsWith('shop')) {
			return;
		}

		const params: Record<string, string> = {};

		if (this._query) params.q = this._query;
		if (this._seller.length) params.seller = this._seller.join(',');
		if (this._mem.length) params.mem = this._mem.join(',');
		if (this._brand.length) params.brand = this._brand.join(',');
		if (this._platform.length) params.platform = this._platform.join(',');
		if (this._memType.length) params.memType = this._memType.join(',');
		if (this._storageType.length) params.storageType = this._storageType.join(',');
		if (this._socket.length) params.socket = this._socket.join(',');
		if (this._frequency.length) params.frequency = this._frequency.join(',');

		const queryString = new URLSearchParams(params).toString();
		window.history.replaceState({}, '', `?${queryString}`);
	}

	public get query(): string {
		return this._query;
	}

	public set query(v: string) {
		this._query = v;
		this.updateUrl();
	}

	public get seller(): string[] {
		return this._seller;
	}

	public set seller(value: string[]) {
		this._seller = value;
		this.updateUrl();
	}

	public get mem(): string[] {
		return this._mem;
	}

	public set mem(value: string[]) {
		this._mem = value;
		this.updateUrl();
	}

	public get brand(): string[] {
		return this._brand;
	}

	public set brand(value: string[]) {
		this._brand = value;
		this.updateUrl();
	}

	public get platform(): string[] {
		return this._platform;
	}

	public set platform(value: string[]) {
		this._platform = value;
		this.updateUrl();
	}

	public get memType(): string[] {
		return this._memType;
	}

	public set memType(value: string[]) {
		this._memType = value;
		this.updateUrl();
	}

	public get storageType(): string[] {
		return this._storageType;
	}

	public set storageType(value: string[]) {
		this._storageType = value;
		this.updateUrl();
	}

	public get socket(): string[] {
		return this._socket;
	}

	public set socket(value: string[]) {
		this._socket = value;
		this.updateUrl();
	}

	public get frequency(): string[] {
		return this._frequency;
	}

	public set frequency(value: string[]) {
		this._frequency = value;
		this.updateUrl();
	}
}

export const filters = new FiltersState();
