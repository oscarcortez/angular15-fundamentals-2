import { Component } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss']
})
export class EstadoCuentaComponent {

  transferencias: any[] = []

  constructor(private service: TransferenciasService){}

  ngOnInit(): void{
    this.service.todas().subscribe((resource: Transferencia[]) => {
      this.transferencias = resource
    })
  }
}
