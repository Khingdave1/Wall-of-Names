import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { StudentsComponent } from 'src/app/modules/students/students.component';
import { HallOfResidenceComponent } from 'src/app/modules/hall-of-residence/hall-of-residence.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StaffsComponent } from 'src/app/modules/staffs/staffs.component';
import { StaffProfileComponent } from 'src/app/modules/staff-profile/staff-profile.component';
import { StudentProfileComponent } from 'src/app/modules/student-profile/student-profile.component';
import { HallDetailsComponent } from 'src/app/modules/hall-details/hall-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StudentsComponent,
    StaffsComponent,
    HallOfResidenceComponent,
    StaffProfileComponent,
    StudentProfileComponent,
    HallDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
