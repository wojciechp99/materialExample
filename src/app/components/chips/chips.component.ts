import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRow
} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    MatFormField,
    MatChipGrid,
    MatChipRow,
    MatIcon,
    MatChipInput,
    MatLabel,
    MatChip
  ],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  @Input() text?: string;
  @Input() filterName?: string;
  @Input() filterValue?: string;
  @Output() remove: EventEmitter<string> = new EventEmitter();
}
