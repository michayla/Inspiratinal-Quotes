import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;


  quotes = [
    new Quote(1, 'Fear is never the source of security' , 'Wangari Maathai' , new Date(2020, 3, 1)),
    new Quote (2 , 'Its not about what you\have been through , its about what you became' , 'Trevor Jayson' , new Date(2020,3, 1)),
 

  addNewQuote(qoute) {
    const qouteLength = this.quotes.length;
    qoute.id = qouteLength + 1;
    qoute.completeDate = new Date(qoute.completeDate);
    this.quotes.push(qoute);

  }

  completeGoal(isComplete, index) {
    if (isComplete) {
        this.quotes.splice(index, 1);
        }
    alert('Are you sure you want to delete this quote?');
        }

  toogleDetails(index) {
   
    alert('Its okay');
  }
  constructor() { }

  ngOnInit() {
  }

}
