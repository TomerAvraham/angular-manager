import { Component, OnInit } from '@angular/core';
import { MeetInterface } from 'src/app/interfaces/meet.interface';
import { GroupService } from 'src/app/services/group.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-list.component.html',
  styleUrls: ['./meet-list.component.css'],
})
export class MeetListComponent implements OnInit {
  constructor(public groupService: GroupService) {}

  ngOnInit(): void {}
}
