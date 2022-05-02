import { Injectable, Output, EventEmitter } from '@angular/core'
import { Residencia } from '../model/residencia';

@Injectable()
export class ResidenciainfoService {

residencia: any;
  
isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle(residencia:any) {
    this.isOpen = !this.isOpen;
    this.residencia = residencia;
    this.change.emit(this.isOpen);
    this.change.emit(this.residencia);
  }

}