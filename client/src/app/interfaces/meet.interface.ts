import { GroupInterface } from './group.interface';

export interface MeetInterface {
  _id: String;
  group: GroupInterface;
  description: String;
  start_date: Date;
  end_date: Date;
  room: String;
}
