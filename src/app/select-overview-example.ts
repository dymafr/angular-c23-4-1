import {Component} from '@angular/core';

@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html'
})
export class SelectOverviewExample {
  activites: string[] = [
    'Sport',
    'Dormir',
    'Jeux vidéos',
    'Chanter',
    'Manger',
    'Boire'
  ];
}