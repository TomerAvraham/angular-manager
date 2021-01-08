import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  private URL: String = 'http://localhost:5000/';

  getMeeting(id: String) {
    return this.http.get(this.URL + `meet/ByGroup/${id}`);
  }

  getGroups() {
    return this.http.get(this.URL + 'group/all');
  }

  addMeet(meet: any) {
    return this.http.post(this.URL + 'meet/add', meet);
  }
}
