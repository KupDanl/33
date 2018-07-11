import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  input1: number;
  input2: number;
  result: number;
  noValidInp: boolean = false;
  showResult: boolean = false;

  onInput1(e) {
    this.input1 = Number(e.target.value);
  }

  onInput2(e) {
    this.input2 = Number(e.target.value);
  }

  onSum() {
   if(this. input1 === undefined || this.input2 === undefined) {
      this.noValidInp = true;
    } else {
      this.showResult = true;
      this.result = this.input1 + this.input2;
    }  
  }
}
