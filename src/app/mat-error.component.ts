import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

/** Error when invalid control is dirty, touched, or submitted. */
@Component({
	selector: 'form-validation-message',
	template: `
		<mat-error>{{message}}</mat-error>
	`,

})
export class MatErrorComponent
{
	@Input() public message: string;

}
