import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-confim-modal',
	templateUrl: './confim-modal.component.html',
	styleUrl: './confim-modal.component.scss',
})
export class ConfimModalComponent {
	@Input() team: any = null;
	@Output() closed = new EventEmitter<{ id: string; updates: { teamName: string; roomColor: string } } | null>();
	compId: any = null;
	roundId: any = null;
	teamId: any = null;
	nextRound: any = null;
	newPosition: any = null;

	winner() {
		this.closed.emit({
			id: `${this.compId}_r-${this.nextRound}_t-${this.newPosition.toString().padStart(2, '0')}`,
			updates: { teamName: this.team.teamName, roomColor: this.team.roomColor },
		});
	}

	remove() {
		this.closed.emit({
			id: this.team.id,
			updates: { teamName: '-', roomColor: 'default' },
		});
	}

	close() {
		this.closed.emit(null);
	}

	ngOnInit(): void {
		if (!this.team?.id) {
			return;
		}
		[this.compId, this.roundId, this.teamId] = this.team.id.split('_');
		this.nextRound = parseInt(this.roundId.split('-')[1]) + 1;
		this.newPosition = Math.ceil(parseInt(this.teamId.split('-')[1]) / 2);
	}
}
