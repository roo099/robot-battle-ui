import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCompetitorsComponent } from './manage-competitors/manage-competitors.component';
import { RobotKnockoutComponent } from './robot-knockout/robot-knockout.component';

const routes: Routes = [
	{ path: '', redirectTo: 'competition', pathMatch: 'full' },
	{ path: 'competition', component: RobotKnockoutComponent },
	{ path: 'competition/:autoStart', component: RobotKnockoutComponent },
	{ path: 'manage', component: ManageCompetitorsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
