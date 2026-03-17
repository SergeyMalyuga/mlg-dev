import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkCard } from '../models/work-card.model';
import { getWorksData } from '../data/works.data';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  public getWorks(): Observable<WorkCard[]> {
    return of(getWorksData());
  }
}
