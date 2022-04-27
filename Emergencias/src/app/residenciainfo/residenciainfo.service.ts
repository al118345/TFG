import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class ResidenciainfoService {

  isOpen = false;
    residencia: any;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
  actualresi(residencia:any){
    this.residencia = residencia;
    this.change.emit(this.residencia);
  }

}