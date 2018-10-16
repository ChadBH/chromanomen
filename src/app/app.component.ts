import { Component } from '@angular/core';
import {Data} from "../models/data";
import {Choice} from "../models/choice";
import * as Color from 'color';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  public colors: Choice[];
  public answer: Choice;
  public correct: boolean;
  public data: Data;
  public choices: number;
  public bgColor: string;

  faCoffee = faCoffee;

  constructor() {
    //todo: get from url
    this.choices = 4;
    this.data = new Data();
    this.next();
  }

  next(){
    this.colors = this.data.colors(this.choices);
    var choice = Math.floor(Math.random() * this.choices);
    this.answer = this.colors[choice];
    this.correct = false;
    var test = Color(this.answer.hex);
    console.log(test);
    //this.bgColor = Color(this.answer.hex).lighten(0.5)
  }

  checkColor(color: Choice){
    if(color.hex === this.answer.hex){
      color.right();
      this.correct = true;
      setTimeout(() => {
        this.next();
      }, 2000);
    }else{
      color.wrong();
      this.correct = false;
    }
  }
}
