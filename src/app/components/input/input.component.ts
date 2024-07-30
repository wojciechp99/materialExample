import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {AbstractFormFields} from "../abstract-form-fields";
import {FormGroupDirective, ReactiveFormsModule} from "@angular/forms";
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {MatError, MatFormField, MatHint} from "@angular/material/form-field";
import {NgClass, NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    FaIconComponent,
    NgClass,
    MatInput,
    NgIf,
    MatHint,
    MatError
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent extends AbstractFormFields {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string = 'text';
  @Input() maxLength: number = null;
  @Input() iconAction: IconDefinition;

  @Output() leaveField: EventEmitter<string> = new EventEmitter<string>();
  @Output() iconClicked: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('inputField') inputField: ElementRef;

  constructor(override readonly parentFormGroup: FormGroupDirective) {
    super(parentFormGroup);
  }

  maxLengthError(): boolean {
    return (this.formControl.value?.toString().length === this.maxLength)
  }

  focusInput(): void {
    this.inputField.nativeElement.focus();
  }

  emitIconClicked(): void {
    if (this.formControl.enabled) {
      this.iconClicked.emit();
    }
  }

}
