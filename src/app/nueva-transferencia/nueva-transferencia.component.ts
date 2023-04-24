import { Component } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.scss']
})
export class NuevaTransferenciaComponent {

  constructor(private service: TransferenciasService){}

  valor: string = ''
  destino: string = ''

transferir() {
  const datos: Transferencia = {
    valor: this.valor,
    destino: this.destino,
    fecha: new Date()
  }
  this.service.agregar(datos).subscribe(
    (respuesta) => console.log(respuesta),
    (err) => console.log(err)
  )
  this.limpiarCampos()
}
  limpiarCampos() {
    this.valor = ''
    this.destino = ''
  }
}
