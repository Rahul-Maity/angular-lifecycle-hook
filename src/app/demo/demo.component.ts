import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  title: string = 'Demo Component';
 @Input() message !: string ;

  @ViewChild('temp') tempPara!: ElementRef;

  @ContentChild('temp')paraContent!: ElementRef;


  constructor() {
    //console.log('demo component constructor called')
    //// console.log(this.title);
    // console.log(this.message);
  }


  ngOnChanges(changes:SimpleChanges) {
    //console.log('ngOnChanges hook called');
    // console.log(this.message);
    // console.log(changes)
  }
  ngOnInit() {
   // console.log('ngOninit hook called');
   
  }
  ngDoCheck() {
  //  console.log('ngDoCheck hook called');
    //console.log('In Docheck', this.paraContent);
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit hook called');
   // console.log('In ngAfterContent', this.paraContent);
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked hook called');
    // console.log(this.tempPara)
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit is called')
    // console.log(this.tempPara)
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called')
    console.log(this.tempPara.nativeElement.textContent)
  }
}
