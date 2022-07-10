import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProvinciasService } from '../services/provincias.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _service: ProvinciasService) { }
  provincias: any = []
  ngOnInit(): void {
    this._activatedRoute.paramMap
      .subscribe((params: ParamMap): void => {
        this._service.getProvincias()
          .subscribe((data: any[]): void => {
            this.provincias = data
              .filter((provincia: any) => provincia.departamento.nombre == this.decode(String(params.get('departamento'))))
          })
      })
  }
  encode(texto: string) { return texto.split(' ').join('-') }
  decode(texto: string) { return texto.split('-').join(' ') }
}
