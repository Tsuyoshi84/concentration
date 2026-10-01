import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-title',
  templateUrl: './top-title.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-title.component.css'],
  imports: [NgFor],
})
export class TopTitleComponent {}
