import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-lifecycle-hook';
  inputVal: string='';
  constructor() {
    console.log('App component constructor called')
  }
  onBtnClicked(inputEl:HTMLInputElement) {
    this.inputVal= inputEl.value;
    
  }

  ngAfterViewInit() {
    // console.log('ng after view init of app component called')
  }
}
