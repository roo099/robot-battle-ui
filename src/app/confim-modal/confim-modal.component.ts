import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
	selector: 'app-confim-modal',
	templateUrl: './confim-modal.component.html',
	styleUrl: './confim-modal.component.scss',
})
export class ConfimModalComponent {
	team: any = null;

	constructor(public modalRef: MdbModalRef<ConfimModalComponent>) {}

	winner() {
		const [comp_id, round_id, team_id] = this.team.id.split('_');
		const nextRound = parseInt(round_id.split('-')[1]) + 1;
		console.log('nextRound', nextRound);
		console.log('team_id', team_id.split('-'));
		const nextPosition = Math.ceil(parseInt(team_id.split('-')[1]) / 2);
		console.log('nextPosition', nextPosition);
		this.modalRef.close({
			id: `${comp_id}_r-${nextRound}_t-${nextPosition}`,
			updates: { teamName: this.team.teamName, roomColor: this.team.roomColor },
		});
	}

	remove() {
		console.log('remove');
		this.modalRef.close({
			id: this.team.id,
			updates: { teamName: '-', roomColor: 'default' },
		});
	}
}
