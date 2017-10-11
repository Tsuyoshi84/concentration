import { Component, OnInit } from '@angular/core';

import { Result } from '../../enums/result.enum';

@Component({
  selector: 'co-flip-result',
  templateUrl: './flip-result.component.html',
  styleUrls: ['./flip-result.component.sass']
})
export class FlipResultComponent implements OnInit {
  message: string;

  constructor() { }

  ngOnInit() {
  }

  showResult(result: Result): void {
    switch (result) {
      case Result.Correct:
        this.message = 'Correct!';
        break;
      case Result.Wrong:
        this.message = 'Wrong...';
        break;
      default:
        this.message = '';
        break;
    }
  }

}
