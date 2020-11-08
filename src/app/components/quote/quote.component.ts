import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../../classes/quotes';
import { VoteComponent} from '../vote/vote.component'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  /*numberofupvotes: any = VoteComponent.numberOfUpVote;
  numberOfDownVotes: any = VoteComponent.numberOfDownVote;*/

  quotes:Quotes[]=[
    new Quotes('Albert Einstein', 'It has become appallingly obvious that our technology has exceeded our humanity.','albei@gmail.com',2000,190,new Date(2020, 3, 1, 17, 23, 42, 11)),
    new Quotes('Wayne Dyer','Be miserable. Or motivate yourself. Whatever has to be done, It is always your choice.','janvie@gmail.com',9000,400,new Date(2020, 2, 2, 17, 23, 42, 11)),
    new Quotes('George Lorimer',"You've got to get up every morning with determination if you're going to go to bed with satisfaction..",'vancyvanle@gmail.com',780,9,new Date(2020, 1, 4, 17, 23, 42, 11)),
    new Quotes('John R. Wooden', "Don't let what you cannot do interfere with what you can do.", 'rooniey@gmail.com',6750 ,330,new Date(2020, 2, 4, 17, 23, 42, 11)),
    new Quotes('Napoleon Hill',"The starting point of all achievement is desire.",'napoleon@gmail.com', 10000 ,687, new Date(2020, 4, 4, 17, 23, 42, 11)),
    new Quotes('David Allen',"If you don’t pay appropriate attention to what has your attention, it will take more of your attention than it deserves.",'poertia@gmail.com', 4000 ,230, new Date(2020, 2, 4, 17, 23, 42, 11)),
    new Quotes('Emerson','A great man is always willing to be little.','emerson@gmail.com', 8090 ,248, new Date(2019, 11, 4, 17, 23, 42, 11)),
    new Quotes('Clive James', "It is only when they go wrong that machines remind you how powerful they are.", 'aprat@gmail.com', 969 ,20, new Date(2019, 4, 4, 17, 23, 42, 11)),
    new Quotes('Bill Gates', "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",'meshak@gmail.com', 5600 ,300, new Date(2019, 12, 4, 17, 23, 42, 11)),
  ]
 
  

  addNewQuote(quote){
    this.quotes.unshift(quote)
  }
  
  quoteDelete(quote){
    let toDelete = confirm(`Are you sure you want to delete this quote?`)
    if (toDelete){
      this.quotes.splice(quote.quote,1);
    }
  }
  
  likeButtonClick(i){
    this.quotes[i].numberOfUpVotes++;
  }
  dislikeButtonClick(i){
    this.quotes[i].numberOfDownVotes++;
  }

  

  constructor() {}

  ngOnInit(): void {
  }

}
