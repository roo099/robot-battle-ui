import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
	selector: 'app-confim-modal',
	templateUrl: './confim-modal.component.html',
	styleUrl: './confim-modal.component.scss',
})
export class ConfimModalComponent {
	team: any = null;
	compId: any = null;
	roundId: any = null;
	teamId: any = null;
	nextRound: any = null;
	newPosition: any = null;

	constructor(public modalRef: MdbModalRef<ConfimModalComponent>) {}

	winner() {
		this.modalRef.close({
			id: `${this.compId}_r-${this.nextRound}_t-${this.newPosition.toString().padStart(2, '0')}`,
			updates: { teamName: this.team.teamName, roomColor: this.team.roomColor },
		});
	}

	remove() {
		this.modalRef.close({
			id: this.team.id,
			updates: { teamName: '-', roomColor: 'default' },
		});
	}

	ngOnInit(): void {
		[this.compId, this.roundId, this.teamId] = this.team.id.split('_');
		this.nextRound = parseInt(this.roundId.split('-')[1]) + 1;
		this.newPosition = Math.ceil(parseInt(this.teamId.split('-')[1]) / 2);
	}
}
