import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../services/competition.service';
import { flyInDownEnterAnimation } from 'mdb-angular-ui-kit/animations';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfimModalComponent } from '../confim-modal/confim-modal.component';

@Component({
	selector: 'app-robot-knockout',
	templateUrl: './robot-knockout.component.html',
	styleUrl: './robot-knockout.component.scss',
	animations: [flyInDownEnterAnimation()],
})
export class RobotKnockoutComponent {
	modalRef: MdbModalRef<ConfimModalComponent> | null = null;
	competitions: any[] = [];

	constructor(private modalService: MdbModalService, private competitionService: CompetitionService) {}

	countdown: number = 5;
	countdownStarted: boolean = false;
	countdownCompleted: boolean = false;

	startCountdown() {
		this.countdownStarted = true;
		this.countdownCompleted = false;
		this.countdown = 5;

		const interval = setInterval(() => {
			this.countdown--;
			if (this.countdown === 0) {
				clearInterval(interval);
				this.countdownCompleted = true;
			}
		}, 1000);
	}

	pickWinner(team: any) {
		this.modalRef = this.modalService.open(ConfimModalComponent, {
			data: { team: team },
		});
		this.modalRef.onClose.subscribe((message: any) => {
			if (message) {
				this.updateTeam(message.id, message.updates);
			}
		});
	}

	updateTeam(id: string, team: any): void {
		this.competitionService.updateTeam(id, team).subscribe(
			updatedTeam => {
				this.getCompetition();
			},
			error => {
				console.error('Error updating team room:', error);
			}
		);
	}

	getCompetition() {
		this.competitionService.getCompetitions().subscribe(
			data => {
				this.competitions = data;
				console.log('Competitions:', this.competitions);
			},
			error => {
				console.error('Error fetching competitions:', error);
			}
		);
	}

	private updateLocalTeamRoom(updatedTeamRoom: any): void {
		for (const competition of this.competitions) {
			for (const round of competition.rounds) {
				const teamRoomIndex = round.teamRooms.findIndex((tr: any) => tr.id === updatedTeamRoom.id);
				if (teamRoomIndex !== -1) {
					round.teamRooms[teamRoomIndex] = updatedTeamRoom;
					return;
				}
			}
		}
	}

	ngOnInit(): void {
		this.getCompetition();
	}
}
