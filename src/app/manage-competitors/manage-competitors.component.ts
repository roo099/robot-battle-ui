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

	// createRowFormGroup(row: any): FormGroup {
	// 	return this.fb.group({
	// 		id: [row.id],
	// 		teamName: [row.teamName],
	// 		roomColor: [row.roomColor],
	// 	});
	// }

	// get rowsFormArray(): FormArray {
	// 	return this.form.get('competitions') as FormArray;
	// }

	initializeForms(competitions: any) {
		for (const comp of competitions) {
			this.competitionForms[comp.name] = this.fb.group({
				rows: this.fb.array(comp.rounds[0].teams.map((row: any) => this.createRowFormGroup(row))),
			});
			// console.log(this.competitionForms);
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
			return this.fb.array([]); // return an empty FormArray to avoid further errors
		}
		return formGroup.get('rows') as FormArray;
	}

	addRow(competition: string) {
		this.getRowsFormArray(competition).push(this.createRowFormGroup({ id: null, teamName: '', roomColor: '' }));
	}

	removeRow(competition: string, index: number) {
		this.getRowsFormArray(competition).removeAt(index);
	}

	onSubmit(competition: string) {
		console.log(this.competitionForms[competition].value.rows);
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
