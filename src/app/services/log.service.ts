import { Injectable } from '@angular/core'
import  { BehaviorSubject, Observable, of } from 'rxjs'

import { Log } from '../models/Log'

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs: Log[]

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null})
    selectedLog = this.logSource.asObservable()

    private stateSource = new BehaviorSubject<boolean>(true)
    stateClear = this.stateSource.asObservable()

  constructor() { 
    this.logs = []
    // this.logs = [
    //   {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:22:23')},
    //   {id: '3', text: 'Added log component', date: new Date('12/27/2017 12:00:00')},
    // ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs)
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log)
  }

  updateLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if(log.id === curr.id) {
        this.logs.splice(index, 1)
      }
    })
    this.logs.unshift(log)
  }

  deleteLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if(log.id === curr.id) {
        this.logs.splice(index, 1)
      }
    })
  }
  clearState() {
    this.stateSource.next(true)
  }
}
