import { PaisService } from './../../services/pais.service';
import { Country } from './../../interfaces/pais.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = ''
  paises: Country[] = []
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }
  activarRegion(region: string) {
    if (this.regionActiva === region) return
    this.regionActiva = region
    this.paises = []
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises)
  }
}
