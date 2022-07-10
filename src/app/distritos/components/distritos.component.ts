import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DistritosService } from '../services/distritos.service';

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.css']
})
export class DistritosComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _service: DistritosService) { }
  distritos: any = []
  ngOnInit(): void {
    this._activatedRoute.paramMap
      .subscribe((params: ParamMap): void => {
        this._service.getDistritos()
          .subscribe((data: any[]): void => {
            this.distritos = data
              .filter((distrito: any) => distrito.provincia.nombre == this.decode(String(params.get('provincia'))))
          })
      })
  }
  encode(texto: string) { return texto.split(' ').join('-') }
  decode(texto: string) { return texto.split('-').join(' ') }

}
