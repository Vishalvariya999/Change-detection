import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public fruits: string[] = ['Mengo', 'Orange', 'Banana'];
  title = 'changeDetection';

  addFruit(data: any) {
    this.fruits.push(data);
  }
}
