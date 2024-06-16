import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
	selector: 'app-test-match-four',
	templateUrl: './test-match-four.component.html',
	styleUrls: ['./test-match-four.component.scss'],
})
export class TestMatchFourComponent implements OnInit {
	tournament: any = [];
	tournament2: any = [
		{
			name: 'bracket_1',
			placement: [
				{
					name: 'one',
				},
				{
					name: 'two',
				},
				{
					name: 'three',
				},
				{
					name: 'four',
				},
				{
					name: 'five',
				},
				{
					name: 'six',
				},
				{
					name: 'seven',
				},
				{
					name: 'eight',
				},
				{
					name: 'nine',
				},
				{
					name: 'ten',
				},
				{
					name: 'eleven',
				},
				{
					name: 'twelve',
				},
				{
					name: 'thirteen',
				},
				{
					name: 'fourteen',
				},
				{
					name: 'fifteen',
				},
				{
					name: 'sixteen',
				},
			],
		},
		{
			name: 'bracket_2',
			placement: [
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
			],
		},
		{
			name: 'bracket_3',
			placement: [
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
				{
					name: null,
				},
			],
		},
		{
			name: 'bracket_4',
			placement: [
				{
					name: null,
				},
				{
					name: null,
				},
			],
		},
		{
			name: 'bracket_5',
			placement: [
				{
					name: null,
				},
			],
		},
	];

	contestants = [
		{ name: 'Colin Sik', club: 'Club 01' },
		{ name: 'Greg Arias', club: 'Club 01' },
		{ name: 'Toi Story', club: 'Club 01' },
		{ name: 'Gene Eva Convenshun', club: 'Club 02' },
		{ name: 'Jen Tile', club: 'Club 02' },
		{ name: 'Simon Sais', club: 'Club 03' },
		{ name: 'Peter Owt', club: 'Club 04' },
		{ name: 'Hugh N. Cry', club: 'Club 05' },
		{ name: 'Lee Nonmi', club: 'Club 05' },
		{ name: 'Lynne Gwafranca', club: 'Club 05' },
		{ name: 'Art Decco', club: 'Club 05' },
		{ name: 'Lynne Gwistic', club: 'Club 06' },
		{ name: 'Polly Ester Undawair', club: 'Club 06' },
		{ name: 'Oscar Nommanee', club: 'Club 06' },
		{ name: 'Laura Biding', club: 'Club 06' },
		{ name: 'Laura Norda', club: 'Club 06' },
		{ name: 'Des Ignayshun', club: 'Club 06' },
		{ name: 'Mike Rowe-Soft', club: 'Club 07' },
		{ name: 'Anne T. Kwayted', club: 'Club 07' },
		{ name: 'Wayde N. Thabalanz', club: 'Club 07' },
		{ name: 'Dee Mandingboss', club: 'Club 07' },
		{ name: 'Sly Meedentalfloss', club: 'Club 07' },
		{ name: 'Stanley Knife', club: 'Club 08' },
		{ name: 'Wynn Dozeaplikayshun', club: 'Club 08' },
		{ name: 'Mal Ajusted', club: 'Club 08' },
		{ name: 'Penny Black', club: 'Club 08' },
		{ name: 'Mal Nurrisht', club: 'Club 08' },
		{ name: 'Polly Pipe', club: 'Club 09' },
		{ name: 'Polly Wannakrakouer', club: 'Club 09' },
		{ name: 'Con Staninterupshuns', club: 'Club 09' },
		{ name: 'Fran Tick', club: 'Club 09' },
		{ name: 'Santi Argo', club: 'Club 09' },
	];

	constructor() {}

	getBracketSize(contestants: number) {
		const items = [1, 2, 4, 8, 16, 32, 64];
		for (const [index, value] of items.entries()) {
			if (contestants >= value && contestants <= items[index + 1]) {
				return [index + 2, items[index + 1]];
			}
		}
		return [2, 2];
	}

	bracketGenerator(contestants: any) {
		contestants = _.shuffle(contestants);
		const [numberBrackets, requiredPlaces] = this.getBracketSize(contestants.length);
		let requiredPlacesTracket = requiredPlaces;
		const tournament2 = Array.apply(null, Array(numberBrackets)).map((element, index) => {
			if (index > 0) {
				requiredPlacesTracket = requiredPlacesTracket / 2;
			}
			return {
				name: `Bracket ${index + 1}`,
				class: `bracket-${index + 1}`,
				placement: Array.apply(null, Array(requiredPlacesTracket)).map((element, x) => {
					return index == 0 && x + 1 <= contestants.length ? contestants[x] : { name: null };
				}),
			};
		});
		this.tournament = tournament2;
	}

	prepareTournament() {
		for (let i = 0; i < this.tournament[0].placement.length; i += 2) {
			const grouping = this.tournament[0].placement.slice(i, i + 2);
			const contestants = grouping.filter((x: any) => x.name);
			if (contestants.length === 1) {
				console.log(contestants, 0, i);
				this.pickWinner(contestants, 0, i);
			}
		}
	}

	pickWinner(player: any, bracket: any, placement: any) {
		console.log(player, bracket, placement);
		this.tournament[bracket + 1].placement[Math.floor(placement / 2)] = player;
	}

	ngOnInit(): void {
		this.bracketGenerator(this.contestants.slice(0, 12));
		this.prepareTournament();
	}
}
