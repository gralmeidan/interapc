import aspectRatio from '@tailwindcss/aspect-ratio';
import daisyui, { type Config as DaisyUIConfig } from 'daisyui';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				serif: 'Sofia Sans Variable',
				nunito: 'Nunito Variable'
			}
		}
	},

	plugins: [aspectRatio, daisyui],
	daisyui: {
		themes: ['winter', 'night']
	}
} as Config & { daisyui: DaisyUIConfig };
