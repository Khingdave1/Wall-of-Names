import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HallOfResidenceComponent } from './modules/hall-of-residence/hall-of-residence.component';
import { HomeComponent } from './modules/home/home.component';
import { StaffsComponent } from './modules/staffs/staffs.component';
import { StudentProfileComponent } from './modules/student-profile/student-profile.component';
import { StudentsComponent } from './modules/students/students.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'alumni',
        component: StudentsComponent,
        data: {
          title: 'Students',
          description: 'Description Meta Tag Content'
        },
        children: [
        ]
      },
      {
        path: 'alumni-profile',
        component: StudentProfileComponent,
        data: {
          title: 'Alumni profile',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'staff',
        component: StaffsComponent,
        data: {
          title: 'Staff',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'hall-of-residence',
        component: HallOfResidenceComponent,
        data: {
          title: 'Hall of Residence',
          description: 'Description Meta Tag Content'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
