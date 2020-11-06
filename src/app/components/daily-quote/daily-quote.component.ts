import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {
  weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  date=new Date;
  today=this.date.getDay()
  dayInString = this.weekDays[this.today]
   DailyQuotes= [
     {
       'DayOfWeek':'Monday',
       'DayQuote':'Your Monday morning thoughts set the tone for your whole week. See yourself getting stronger, and living a fulfilling, happier & healthier life.'
     },
     {
      'DayOfWeek':'Tuesday',
      'DayQuote':'On this Tuesday, remember that an attitude is contagious so remember to have a good one.'
  },
    {
      'DayOfWeek':'Wednesday',
      'DayQuote':'The rules for a happy Wednesday are the same rules for a happy life. We need to work diligently, to stay true to our values and goals, and to respect others and treat them kindly.'
   },
    {
      'DayOfWeek':'Thursday',
      'DayQuote':'Happy Thursday! Greet your problems and decisions with peace and calm. Use your inner wisdom to evaluate and make smart decisions for yourself! You got this!'
    },
    {
      'DayOfWeek':'Friday',
      'DayQuote':'It’s Friday! Time to go make stories for Monday.'
    },
    {
      'DayOfWeek':'Saturday',
      'DayQuote':'Saturdays are a great relief from our stressful life, yet there is something bitter about waiting desperately for the weekend to come and free us from our overwhelming duties. If we want a life well-lived, filled with meaning and joy, we must look at each day as if it were Saturday.'
    },
    {
      'DayOfWeek':'Sunday',
      'DayQuote':'Ah, Sunday, the day of rest… now THAT IS something to be thankful for! '
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log("Day = " + this.date.getDay());
  }

}
