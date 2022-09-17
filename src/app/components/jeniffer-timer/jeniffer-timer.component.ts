import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeniffer-timer',
  templateUrl: './jeniffer-timer.component.html',
  styleUrls: ['./jeniffer-timer.component.css'],
})
export class JenifferTimerComponent implements OnInit {
  counter: number = 0;
  timer = setInterval(() => {
    this.counter++;
  }, 1000);

  constructor() {}

  ngOnInit() {}
}
