import {
	AfterViewChecked,
	AfterViewInit,
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	ViewContainerRef
} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatErrorComponent} from "./mat-error.component";
import {AbstractControl} from "@angular/forms";

@Directive({
	selector: '[formValidation]'
})
export class FormValidationDirective implements AfterViewInit, AfterViewChecked
{

	componentRef: ComponentRef<MatErrorComponent>;
	formControl: AbstractControl;

	constructor(
		private vcr: ViewContainerRef,
		private resolver: ComponentFactoryResolver,
		private formField: MatFormField
	)
	{ }

	ngAfterViewInit()
	{
		this.formControl = this.formField._control.ngControl.control;
	}

	ngAfterViewChecked(): void
	{

		if (this.formControl.dirty)
		{
			let message = this.formField._control.ngControl.control.hasError('required')
				? 'You must enter a value'
				: this.formField._control.ngControl.control.hasError('email')
					? 'Not a valid email'
					: null;
			this.renderErrorComponent(message);
		}
	}

	renderErrorComponent(message: string)
	{
		if (!this.componentRef)
		{
			const factory = this.resolver.resolveComponentFactory(MatErrorComponent);
			this.componentRef = this.vcr.createComponent(factory);
		}
		this.componentRef.instance.message = message;
		this.componentRef.changeDetectorRef.detectChanges();

	}
}
