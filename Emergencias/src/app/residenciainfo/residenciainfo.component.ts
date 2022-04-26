import { Component, HostBinding, OnInit } from '@angular/core';
import { ResidenciainfoService } from './residenciainfo.service';

@Component({
  selector: 'app-residenciainfo',
  templateUrl: './residenciainfo.component.html',
  styleUrls: ['./residenciainfo.component.css']
})
export class ResidenciainfoComponent implements OnInit {

  public Residencia: Array<any> | undefined;

  constructor( private ResidenciainfoService: ResidenciainfoService) {
  
   }

  @HostBinding('class.is-open')
  
  isOpen = false;

  ngOnInit(): void {
    this.ResidenciainfoService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      this.Residencia = [{Denominacion:"Residencia de ancianos Nuestra Señora de las Mercedes", Direccion:"Calle Granada 13",Municipio:"Alameda",CP:"29530",Telefono:"952710029",Titularidad:"Privada sin lucro",Plazas:"24",URL:"", UltActData:"03/04/2019", Email:"", Lat:37.207588, Lng:-4.657316}];
    });
    
  }

  
}
