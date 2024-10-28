interface BaseQuestion {
	title: string;
	id: string;
	options: string[];
}

export interface RadioQuestion extends BaseQuestion {
	selected: string | null;
	type: 'radio';
}

export interface SelectQuestion extends BaseQuestion {
	selected: string | null;
	type: 'select';
}

export type Question = RadioQuestion | SelectQuestion;

export const mQuestions: Question[] = [
	{
		title: 'Para que você vai usá-lo?',
		id: 'intendedUse',
		options: ['Escritório', 'Jogos', 'Workstation'],
		selected: null,
		type: 'radio'
	},
	{
		title: 'Placa de vídeo dedicada?',
		id: 'dedicatedGpu',
		options: ['Sim', 'Não'],
		selected: null,
		type: 'radio'
	},
	{
		title: 'Tem alguma meta de performance?',
		id: 'goal',
		options: [
			'Counter Strike 2 - 144 fps',
			'Counter Strike 2 - 60 fps',
			'Grand Theft Auto V - 60 fps',
			'Grand Theft Auto V - 30 fps',
			'Red Dead Redemption 2 - 60 fps',
			'Red Dead Redemption 2 - 30 fps',
			'Call of Duty: Black Ops 6 - 144 fps',
			'Call of Duty: Black Ops 6 - 60 fps',
			'Throne and Liberty - 60 fps',
			'Throne and Liberty - 30 fps',
			'Forza Horizon 5 - 60 fps',
			'Forza Horizon 5 - 30 fps',
			'Sons of The Forest - 60 fps',
			'Sons of The Forest - 30 fps',
			'Valorant - 240 fps',
			'Valorant - 60 fps',
			'Fortnite - 144 fps',
			'Fortnite - 60 fps',
			'Elden Ring - 60 fps',
			'Elden Ring - 30 fps',
			'Hogwarts Legacy - 60 fps',
			'Hogwarts Legacy - 30 fps',
			'Cyberpunk 2077 - 60 fps',
			'Cyberpunk 2077 - 30 fps',
			'Minecraft - 144 fps',
			'Minecraft - 30 fps',
			"Assassin's Creed Valhalla - 60 fps",
			"Assassin's Creed Valhalla - 30 fps",
			'League of Legends - 144 fps',
			'League of Legends - 60 fps',
			'Battlefield 2042 - 60 fps',
			'Battlefield 2042 - 30 fps',
			'Starfield - 60 fps',
			'Starfield - 30 fps',
			'Diablo IV - 60 fps',
			'Diablo IV - 30 fps',
			'The Witcher 3 - 60 fps',
			'The Witcher 3 - 30 fps',
			'Apex Legends - 144 fps',
			'Apex Legends - 60 fps',
			'Sims 4 - 30 fps',
			'Stardew Valley - 30 fps',
			'Among Us - 30 fps',
			'RollerCoaster Tycoon - 30 fps',
			'Terraria - 30 fps',
			'Slime Rancher - 30 fps',
			'Cities: Skylines - 30 fps',
			'SimCity - 30 fps',
			'Minecraft - 30 fps',
			'Goat Simulator - 30 fps',
			'Untitled Goose Game - 30 fps'
		],
		selected: null,
		type: 'select'
	},
	{
		title: 'Montagem feita pela loja?',
		id: 'prebuilt',
		options: ['Sim', 'Não'],
		selected: null,
		type: 'radio'
	},
	{
		title: 'Você precisa de armazenamento adicional?',
		id: 'storage',
		options: ['Não', 'SSD', 'HD', 'Ambos'],
		selected: null,
		type: 'radio'
	},
	{
		title: 'Prioridade de resfriamento?',
		id: 'coolingPriority',
		options: ['Custo', 'Desempenho', 'Silencioso'],
		selected: null,
		type: 'radio'
	},
	{
		title: 'Quanto armazenamento você precisa?',
		id: 'storageSize',
		options: ['Até 256GB', '256GB - 512GB', '512GB - 1TB', 'Mais de 1TB'],
		selected: null,
		type: 'radio'
	}
];
