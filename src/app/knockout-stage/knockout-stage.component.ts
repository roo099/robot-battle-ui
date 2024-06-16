import { Component } from '@angular/core';

@Component({
	selector: 'app-knockout-stage',
	templateUrl: './knockout-stage.component.html',
	styleUrl: './knockout-stage.component.scss',
})
export class KnockoutStageComponent {
	tournament: any = [
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
			],
		},
		{
			name: 'bracket_4',
			placement: [
				{
					name: null,
				},
			],
		},
	];

	pickWinner(player: any, bracket: any, placement: any) {
		console.log(player, bracket, placement);
		this.tournament[bracket + 1].placement[Math.floor(placement / 2)] = player;
	}
}
