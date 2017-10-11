import { Component, OnInit } from '@angular/core';

import { Result } from '../../enums/result.enum';

@Component({
  selector: 'co-flip-result',
  templateUrl: './flip-result.component.html',
  styleUrls: ['./flip-result.component.sass']
})
export class FlipResultComponent implements OnInit {
  message: string;
  animateClasses: string[];

  constructor() { }

  ngOnInit() {
  }

  showResult(result: Result): void {
    if (result === Result.None) { return; }

    let fadeOutClass: string;

    switch (result) {
      case Result.Correct:
        this.message = 'Correct!';
        this.animateClasses =  ['correct', 'animated', 'tada'];
        fadeOutClass = 'fadeOutUp';
        break;
      case Result.Wrong:
        this.message = 'Wrong...';
        this.animateClasses = ['wrong', 'animated', 'shake'];
        fadeOutClass = 'fadeOutDown';
        break;
    }

    setTimeout(() => {
      this.animateClasses.pop();
      this.animateClasses.push(fadeOutClass);
    }, 1500);
  }

}
