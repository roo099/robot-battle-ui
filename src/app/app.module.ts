import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnockoutStageComponent } from './knockout-stage/knockout-stage.component';
import { BattleBoxComponent } from './battle-box/battle-box.component';
import { TestMatchFourComponent } from './test-match-four/test-match-four.component';
import { RobotKnockoutComponent } from './robot-knockout/robot-knockout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompetitionService } from './services/competition.service';
import { ConfimModalComponent } from './confim-modal/confim-modal.component';
import { ManageCompetitorsComponent } from './manage-competitors/manage-competitors.component';

@NgModule({
	declarations: [
		AppComponent,
		KnockoutStageComponent,
		BattleBoxComponent,
		TestMatchFourComponent,
		RobotKnockoutComponent,
		ConfimModalComponent,
		ManageCompetitorsComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [CompetitionService],
	bootstrap: [AppComponent],
})
export class AppModule {}
