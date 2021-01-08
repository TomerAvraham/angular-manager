import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GroupService } from 'src/app/services/group.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    public groupService: GroupService,
    public serverService: ServerService,
    public formService: FormBuilder
  ) {}

  meetForm: FormGroup;

  description = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  room = new FormControl('', [Validators.required]);

  start_date = new FormControl('', [Validators.required]);

  end_date = new FormControl('', [Validators.required]);

  group = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.groupService.getGroups();

    this.meetForm = this.formService.group({
      description: this.description,
      room: this.room,
      start_date: this.start_date,
      end_date: this.end_date,
      group: this.group,
    });
  }

  addNewMeet() {
    this.serverService.addMeet(this.meetForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.groupService.meets.push(res.newMeet);
        this.meetForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
