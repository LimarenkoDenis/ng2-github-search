import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;

  sortValues = [
    {value: 'steak-0', viewValue: 'Best match'},
    {value: 'pizza-1', viewValue: 'Mosts Stars'},
  ];

  languages = [
    {
      name: 'JavaScript',
      quantity: 213
    },
    {
      name: 'PHP',
      quantity: 213
    },
    {
      name: 'Java',
      quantity: 213
    }
  ];
}
