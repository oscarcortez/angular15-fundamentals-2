import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.scss']
})
export class NuevaTransferenciaComponent {

  constructor(private service: TransferenciasService, private router: Router){}

  valor: string = ''
  destino: string = ''

transferir() {
  const datos: Transferencia = {
    valor: this.valor,
    destino: this.destino,
    fecha: new Date()
  }
  this.service.agregar(datos).subscribe(
    (respuesta) => this.router.navigateByUrl("estado"),
    (err) => console.log(err)
  )
  this.limpiarCampos()
}
  limpiarCampos() {
    this.valor = ''
    this.destino = ''
  }
}
