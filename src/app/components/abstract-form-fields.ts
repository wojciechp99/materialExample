import {Directive, Input, OnInit} from "@angular/core";
import {FormControl, FormGroupDirective} from "@angular/forms";

@Directive()
export abstract class AbstractFormFields implements OnInit {

  @Input() controlName: string = '';
  @Input() fieldId: string = '';
  @Input() set isRequired(value: boolean) {
    this._isRequired = value;
  }

  get isRequired(): boolean {
    return this._isRequired;
  }

  protected _isRequired: boolean = false;
  formControl: FormControl = new FormControl({});

  protected constructor(
    protected readonly parentFormGroup: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.formControl = this.parentFormGroup.form.get(
      this.controlName
    ) as FormControl;
  }
}
