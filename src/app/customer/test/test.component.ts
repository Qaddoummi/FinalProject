import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  x: string = "Ahmed";

  firstName : string | undefined
 
  constructor() { }

  ngOnInit(): void {
  }

  getName(){

    alert(this.firstName)

  }

}
