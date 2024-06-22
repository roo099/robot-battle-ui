import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CompetitionService } from '../services/competition.service';

@Component({
	selector: 'app-manage-competitors',
	templateUrl: './manage-competitors.component.html',
	styleUrl: './manage-competitors.component.scss',
})
export class ManageCompetitorsComponent {
	competitions: any[] = [];
	form!: FormGroup;
	raceForm!: FormGroup;
	sumo!: FormGroup;
	can!: FormGroup;
	competitionForms: { [key: string]: FormGroup } = {};

	constructor(private fb: FormBuilder, private competitionService: CompetitionService) {}

	getCompetition() {
		this.competitionService.getCompetitions().subscribe(
			data => {
				this.competitions = data;
				console.log('Competitions:', this.competitions);
				this.initializeForms(data);
			},
			error => {
				console.error('Error fetching competitions:', error);
			}
		);
	}

	initializeForms(competitions: any) {
		for (const comp of competitions) {
			this.competitionForms[comp.name] = this.fb.group({
				rows: this.fb.array(comp.rounds[0].teams.map((row: any) => this.createRowFormGroup(row))),
			});
		}
	}

	createRowFormGroup(row: any): FormGroup {
		return this.fb.group({
			id: [row.id],
			teamName: [row.teamName],
			roomColor: [row.roomColor],
		});
	}

	getRowsFormArray(competition: string): FormArray {
		const formGroup = this.competitionForms[competition];
		if (!formGroup) {
			console.error(`FormGroup for competition ${competition} not found`);
			return this.fb.array([]);
		}
		return formGroup.get('rows') as FormArray;
	}

	addRow(competition: any) {
		const roundId = `${competition.id}_r-1`;
		const teamSpot = (this.getRowsFormArray(competition.name).length + 1).toString().padStart(2, '0');
		const newId = `${competition.id}_r-1_t-${teamSpot}`;

		this.competitionService.createTeam(newId, '--', 'default', roundId).subscribe(
			response => {
				console.log('Team created:', response);
				this.getRowsFormArray(competition.name).push(
					this.createRowFormGroup({ id: newId, teamName: '--', roomColor: 'default' })
				);
			},
			error => {
				console.error('Team creation failed:', error);
			}
		);
	}

	removeRow(competition: string, index: number) {
		const lastRow = this.getRowsFormArray(competition).at(index);

		this.competitionService.deleteTeam(lastRow.value.id).subscribe(
			response => {
				console.log('Team deleted successful:', response);
				this.getRowsFormArray(competition).removeAt(index);
			},
			error => {
				console.error('Team deletion failed:', error);
			}
		);
	}

	updateTeams(competition: string) {
		this.competitionService.updateTeams(this.competitionForms[competition].value.rows).subscribe(
			response => {
				console.log('Teams update successful:', response);
			},
			error => {
				console.error('Teams update failed:', error);
			}
		);
	}

	ngOnInit(): void {
		this.getCompetition();
	}
}
