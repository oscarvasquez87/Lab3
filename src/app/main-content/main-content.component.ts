import { Component, OnInit } from '@angular/core';

interface IStudent {
  ID: number;
  firstName: string;
  lastName: string;
  Course?: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      ID: 1,
      firstName: 'Oscar',
      lastName: 'Vasquez',
      Course: 'Programming'
    };
    this.students[1] = {
      ID: 2,
      firstName: 'Jim',
      lastName: 'Harper',
      Course: 'Managment'
    };
    this.students[2] = {
      ID: 3,
      firstName: 'Dwight',
      lastName: 'Schrute',
      Course: 'Assistant to the Regional Manager'
    };
    this.students[3] = {
      ID: 4,
      firstName: 'Joe',
      lastName: 'Biden',
      Course: 'Political Science'
    };
  }

  ngOnInit() {
  }

  addstdent() {
    const student: IStudent = {
      ID: 5,
      firstName: 'Mike',
      lastName: 'Tyson',
      Course: 'PE'
    };

    this.students.push(student);

  }

}
