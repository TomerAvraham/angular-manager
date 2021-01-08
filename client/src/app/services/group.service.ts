import { Injectable } from '@angular/core';
import { GroupInterface } from '../interfaces/group.interface';
import { MeetInterface } from '../interfaces/meet.interface';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  public groups: GroupInterface[] = [];

  public meets: MeetInterface[] = [];

  public selectedGroupId: String = '';

  constructor(private serverService: ServerService) {}

  getGroups() {
    this.serverService.getGroups().subscribe(
      (res: any) => {
        this.groups = res.groups;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setGroupMeets(event) {
    this.selectedGroupId = event.target.value;
    this.serverService.getMeeting(this.selectedGroupId).subscribe(
      (res: any) => {
        this.meets = res.meets;
        console.log(this.meets);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
