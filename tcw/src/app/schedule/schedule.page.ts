import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { formatDate} from '@angular/common';
import { CalendarComponent} from 'ionic2-calendar/calendar';
import { Schedule } from './Schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  viewDate: Date = new Date();
  //calendar: Calendar;
  /*
  view = 'week';
  locale = 'pt';
  isDragging = false;

  refresh: Subject<any> = new Subject();
  */
  /*
  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 7),
      end: addHours(startOfDay(new Date()), 9),
      title: 'First Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(startOfDay(new Date()), 12),
      title: 'Second Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
  ];
  */
 
 isToday: boolean;
 evento: Schedule;
 /*
 schedule = {
   cliente: '',
   title: '',
   pet: '',
   servico: '',
   startTime: '',
   endTime: '',
   responsavel: '',
   allDay: false
 };
*/
 


 minDate = new Date().toISOString();

 eventSource = [];
 viewTitle;

 calendar = {
  mode: 'month',
  currentDate: new Date(),
  /*
  dateFormatter: {
      formatMonthViewDay: function(date:Date) {
          return date.getDate().toString();
      },
      formatMonthViewDayHeader: function(date:Date) {
          return 'MonMH';
      },
      formatMonthViewTitle: function(date:Date) {
          return 'testMT';
      },
      formatWeekViewDayHeader: function(date:Date) {
          return 'MonWH';
      },
      formatWeekViewTitle: function(date:Date) {
          return 'testWT';
      },
      formatWeekViewHourColumn: function(date:Date) {
          return 'testWH';
      },
      formatDayViewHourColumn: function(date:Date) {
          return 'testDH';
      },
      formatDayViewTitle: function(date:Date) {
          return 'testDT';
      }
      
  }
  */
};

@ViewChild(CalendarComponent, null) myCal: CalendarComponent;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string ) { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.evento = {
      codigo: -1,
      cliente: '',
      dataAgendamento: new Date(),
      pet: '',
      servico: '',
      horarioAgendamento: new Date(),
      horaEncerramento: new Date(),
      responsavel: '',
      dataLancamento: new Date(),
      dataEncerramento: new Date(),
      atendente: ''
      //allDay: false
    };
  }
    addEvent() {
      let eventCopy = {
        cliente: this.evento.cliente,
        title: this.evento.cliente + '-' + this.evento.pet,
        horarioAgendamento:  new Date(this.evento.horarioAgendamento),
        horaEncerramento: new Date(this.evento.horaEncerramento),
        allDay: false,
        pet: this.evento.pet
      };
   
      if (eventCopy.allDay) {
        let start = eventCopy.horarioAgendamento;
        let end = eventCopy.horaEncerramento;
   
        eventCopy.horarioAgendamento = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
        eventCopy.horaEncerramento = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
      }
   
      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      this.resetEvent();
    }

    // Change current month/week/day
    next() {
      let swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slideNext();
    }
 
    back() {
      var swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slidePrev();
    }
 
    // Change between month/week/day
    changeMode(mode) {
      this.calendar.mode = mode;  
    }
 
    // Focus today
    today() {
      this.calendar.currentDate = new Date(); 
    }
 
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
      this.viewTitle = title; 
    }
 
    // Calendar event was clicked
    async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.horarioAgendamento, 'medium', this.locale);
    let end = formatDate(event.horaEncerramento, 'medium', this.locale);
 
    const alert = await this.alertCtrl.create({
    header: event.cliente,
    subHeader: event.pet,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
    alert.present();
    }
 
// Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.evento.horarioAgendamento = selected;

    selected.setHours(selected.getHours() + 1);
    this.evento.horaEncerramento = (selected);
  }
}
  
  /*
  loadEvents() {
    this.eventSource = this.createRandomEvents();
}

onViewTitleChange0d(title) {
    this.viewTitle = title;
}

onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}

changeMode(mode) {
    this.calendar.mode = mode;
}

today() {
    this.calendar.currentDate = new Date();
}

onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}

onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
}

createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            events.push({
                title: 'Event - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
    return events;
}

onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}

markDisabled = (date: Date) => {
    let current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
};

  

}
*/