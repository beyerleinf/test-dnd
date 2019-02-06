import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-issue-fourtyfour',
  templateUrl: './issue-fourtyfour.component.html',
  styleUrls: ['./issue-fourtyfour.component.css']
})
export class IssueFourtyfourComponent implements OnInit {
  drops: number;
  userDropped: boolean;

  listOne: string[] = [
    'Coffee',
    'Orange Juice',
    'Red Wine',
    'Unhealty drink!',
    'Water',
  ];

  constructor() {}

  ngOnInit() {
    this.drops = 0;
  }

  onDropSuccess(event: any) {
    console.log(event);

    this.drops++;
    this.userDropped = true;

    setTimeout(() => {
      this.userDropped = false;
    }, 5000)
  }
}
