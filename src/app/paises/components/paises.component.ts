import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent implements OnInit {
  constructor(private _paisesService: PaisesService) {}
  paises: any = [];
  ngOnInit(): void {
    this._paisesService.getPaises().subscribe((data) => {
      this.paises = data;
    });
  }
}
