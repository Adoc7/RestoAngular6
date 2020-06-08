import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, switchMap } from 'rxjs/operators';
import { ScheduleService } from '../services/schedule.service';
import { EveningEvent } from '../models/evening-event.interface';

@Component({
  selector: 'jg-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result: EveningEvent[] = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.searchTerms$
      .pipe(
        // map(x => x.toUpperCase()),
        // tap(x => console.log('après map uppercase', x)),
        // map(uppercased => this.reverse(uppercased)),
        // tap(x => console.log('après reverse', x)),
        debounceTime(1500),
        switchMap(word => this.scheduleService.search(word)),
        tap(x => console.log(x)),

      )
      .subscribe(data => this.result = data);
  }
  reverse(word) {
    return word.split('').reverse().join('');
  }
}
