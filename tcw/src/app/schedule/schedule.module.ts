import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { CalendarModule, DateAdapter} from 'angular-calendar';
import { adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import { NgCalendarModule} from 'ionic2-calendar';
//import { CalendarModule  } from 'ion2-calendar';
//import {ModalController} from 'ionic-angular';

//import { CalendarWeekHoursViewModule} from 'angular-calendar-week-hours-view';


import { SchedulePage } from './schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory

     }),
     NgCalendarModule
     
     //CalendarModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
