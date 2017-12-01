import { Component, OnInit, Input,Output } from '@angular/core';

@Component({
  selector: 'chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.sass']
})
export class ChatScreenComponent implements OnInit {

  @Input() 
  set receivedQuestion(question){
    // if(this.receivedQuestions.length == 1) {
    //   this.receivedQuestions[0] = question
    // } else {
      this.receivedQuestions.push(question)
    // }
    
  }
  

  receivedQuestions: string[] = []
  constructor() { }

  ngOnInit() {
    console.log(this.receivedQuestion);
  }



}
