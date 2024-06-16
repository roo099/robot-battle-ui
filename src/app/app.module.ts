import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnockoutStageComponent } from './knockout-stage/knockout-stage.component';
import { BattleBoxComponent } from './battle-box/battle-box.component';
import { TestMatchFourComponent } from './test-match-four/test-match-four.component';
import { RobotKnockoutComponent } from './robot-knockout/robot-knockout.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbChipsModule } from 'mdb-angular-ui-kit/chips';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopconfirmModule } from 'mdb-angular-ui-kit/popconfirm';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbMultiRangeModule } from 'mdb-angular-ui-kit/multi-range';
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
		AppRoutingModule,
		MdbAccordionModule,
		MdbAutocompleteModule,
		MdbCarouselModule,
		MdbChartModule,
		MdbChipsModule,
		MdbCheckboxModule,
		MdbCollapseModule,
		MdbDatepickerModule,
		MdbDropdownModule,
		MdbFormsModule,
		MdbInfiniteScrollModule,
		MdbLazyLoadingModule,
		MdbLightboxModule,
		MdbLoadingModule,
		MdbModalModule,
		MdbNotificationModule,
		MdbPopconfirmModule,
		MdbPopoverModule,
		MdbRadioModule,
		MdbRangeModule,
		MdbRatingModule,
		MdbRippleModule,
		MdbScrollbarModule,
		MdbScrollspyModule,
		MdbSelectModule,
		MdbSidenavModule,
		MdbSmoothScrollModule,
		MdbStepperModule,
		MdbStickyModule,
		MdbTableModule,
		MdbTabsModule,
		MdbTimepickerModule,
		MdbTooltipModule,
		MdbValidationModule,
		MdbMultiRangeModule,
		BrowserAnimationsModule,
	],
	providers: [CompetitionService],
	bootstrap: [AppComponent],
})
export class AppModule {}
