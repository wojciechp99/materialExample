import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../input/input.component";
import {FontAwesomeModule, IconDefinition} from "@fortawesome/angular-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ChipsComponent} from "../chips/chips.component";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    FontAwesomeModule,
    MatTabGroup,
    MatTab,
    ChipsComponent,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  formGroup: FormGroup = new FormGroup({
    name: new FormControl<string>({value: '', disabled: false}, Validators.required),
    lastname: new FormControl<string>({value: '', disabled: false}, Validators.required),
    address: new FormControl<string>({value: '', disabled: false}),
    city: new FormControl<string>({value: '', disabled: false}),
  });
  faLink: IconDefinition = faLink;

  movies: string[] = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];
  chips: string[] = ['Banana', 'Apple', 'Carrot']

  emitSomething(value: string):void {
    console.log(`Tu zwrócił nam emit: ${value}`)
  }

  doSomeAction(): void {
    console.log('Tu możemy logike dodać do przycisku')
  }

  // zrobiłem tutaj na szybko dodawanie randomowych stringów
  addChip() {
    const random: string[] = ['Cola', 'Pepsi', 'Banana'];
    this.chips.push(random[(Math.random() * random.length) | 0])
  }

  // remove jest na podstawie stringa, dlatego jeżeli będą się powtarzać to kilka usuniemy
  removeElem(elem: string) {
    this.chips = this.chips.filter((name: string): boolean => name !== elem)
  }

  // Dodatkowo drag and drop, którego może być użyty np do listy pracowników
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
