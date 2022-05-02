import { Component, HostBinding, OnInit } from '@angular/core';
import * as internal from 'stream';
import { ResidenciainfoService } from './residenciainfo.service';

@Component({
  selector: 'app-residenciainfo',
  templateUrl: './residenciainfo.component.html',
  styleUrls: ['./residenciainfo.component.css']
})
export class ResidenciainfoComponent implements OnInit {

  Residencia: any;
  constructor( private ResidenciainfoService: ResidenciainfoService) {
  
   }

  @HostBinding('class.is-open')
  isOpen = false;


  ngOnInit(): void {
    this.ResidenciainfoService.change.subscribe(isOpen =>{
      this.isOpen = isOpen;
    });

    this.ResidenciainfoService.change.subscribe(residencia =>{
      this.Residencia = residencia;
    });
  
  }

  
}
