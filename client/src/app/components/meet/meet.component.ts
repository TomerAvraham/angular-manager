import { Component, Input, OnInit } from '@angular/core';
import { MeetInterface } from 'src/app/interfaces/meet.interface';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css'],
})
export class MeetComponent implements OnInit {
  constructor() {}

  @Input() public meet: MeetInterface;

  ngOnInit(): void {}
}
