import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-battle-box',
	templateUrl: './battle-box.component.html',
	styleUrl: './battle-box.component.scss',
})
export class BattleBoxComponent {
	@Input() name!: string;
}
