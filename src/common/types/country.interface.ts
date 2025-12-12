export interface Country {
	id: number;
	name: {
		common: string;
	};
	capital: string[];
	region: string;
	area: number;
	flags: {
		png: string;
	};
	population: number;
	landlocked: boolean;
}
