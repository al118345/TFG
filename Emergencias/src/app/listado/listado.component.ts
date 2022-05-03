import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Residencia } from '../model/residencia';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  residencias!: Residencia[];
  searchText!: string;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.searchResidencias().subscribe((residencias: Residencia[]) => {
      this.residencias = residencias;
    });
  }

}
