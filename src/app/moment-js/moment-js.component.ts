import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_FORMATS } from 'ng-pick-datetime-moment';
import moment from 'moment-timezone';
import { Moment } from 'moment';


@Component({
    selector: 'app-moment-js-example',
    templateUrl: './moment-js.component.html',
    styleUrls: ['./moment-js.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter},
        {provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS},{ provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB' },
    ],
})
export class MomentJsComponent implements OnInit {


    dateTime: any;
  
    constructor() {
      //moment.tz.setDefault('Asia/Oral');
      this.dateTime = moment(new Date()).zone("+05:00");
    }

    ngOnInit() {
       
    }
    onchangetimeZone() {
      this.dateTime = moment(this.dateTime).zone("+05:00");

    }

}
