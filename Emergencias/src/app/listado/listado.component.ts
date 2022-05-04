import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Residencia } from '../model/residencia';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {
  residencias!: Residencia[];
  searchText!: string;
  page_size: number = 25;
  page_number = 1;
  
  constructor(private apiService: ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.searchResidenciasOrder().subscribe((residencias: Residencia[]) => {
      this.residencias = residencias;
    });
  }
  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

}
