import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {


  alumnis: any;
  showDetails: boolean = false
  currentItem: any
  name: string;

  constructor() { }

  ngOnInit(): void {
    this.alumnis = [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@mail.com',
        phoneNumber: '(234) 90 000 000 0000',
        image: '../../../assets/img/unsplash_J1OScm_uHUQ.png'
      },
      {
        id: 2,
        name: 'Khing Dave',
        email: 'khingdave@mail.com',
        phoneNumber: '(234) 90 111 111 1111',
        image: '../../../assets/img/unsplash_aoEwuEH7YAs.png'
      },
      {
        id: 3,
        name: 'Robert Ben',
        email: 'robertben@mail.com',
        phoneNumber: '(234) 90 222 222 2222',
        image: '../../../assets/img/unsplash_5aGUyCW_PJw.png'
      },
      {
        id: 4,
        name: 'Michael Jordan',
        email: 'michaeljordan@mail.com',
        phoneNumber: '(234) 90 222 222 2222',
        image: '../../../assets/img/unsplash_aoEwuEH7YAs.png'
      },
      {
        id: 5,
        name: 'Dom Praise',
        email: 'dompraise@mail.com',
        phoneNumber: '(234) 90 222 222 2222',
        image: '../../../assets/img/unsplash_J1OScm_uHUQ.png'
      },
    ]
  }

  // Show Details
  openShowDetails(data: any) {
    this.currentItem = data

    this.showDetails = true
  }

  // Search alumnis
  search() {
    if (this.name != "") {
      this.alumnis = this.alumnis.filter((res: any) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == "") {
      this.ngOnInit()
    }
  }

}
