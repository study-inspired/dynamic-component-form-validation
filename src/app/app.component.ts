import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher
{
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean
    {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{

    form = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.email,]),
        phone: new FormControl('', []),
        message: new FormControl('', [Validators.required]),
    });

    matcher = new MyErrorStateMatcher();

    constructor(private fb: FormBuilder) {}

}
