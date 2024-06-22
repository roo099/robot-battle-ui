import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CompetitionService {
	private baseUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getCompetitions(): Observable<any> {
		return this.http.get<any>(`${this.baseUrl}/competitions`);
	}

	updateTeam(id: string, team: any): Observable<any> {
		return this.http.put<any>(`${this.baseUrl}/team/${id}`, team);
	}

	updateTeams(teams: any): Observable<any> {
		return this.http.put<any>(`${this.baseUrl}/teams`, teams);
	}

	createTeam(id: string, teamName: string, roomColor: string, roundId: string): Observable<any> {
		return this.http.post<any>(`${this.baseUrl}/team`, {
			id: id,
			teamName: teamName,
			roomColor: roomColor,
			RoundId: roundId,
		});
	}

	deleteTeam(id: string): Observable<any> {
		return this.http.delete<any>(`${this.baseUrl}/team/${id}`);
	}
}
