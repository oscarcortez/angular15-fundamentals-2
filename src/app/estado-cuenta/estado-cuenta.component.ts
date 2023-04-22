import { Component } from '@angular/core';
import { TransferenciasServiceService } from '../services/transferencias.service.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss']
})
export class EstadoCuentaComponent {

  transferencias: any[] = []

  constructor(private service: TransferenciasServiceService){
    this.transferencias = this.service.transferencias
  }

}
