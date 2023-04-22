import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.scss']
})
export class NuevaTransferenciaComponent {
  @Output() enviarDatos = new EventEmitter<any>()

  valor: string = ''
  destino: string = ''

transferir() {
  const datos = {
    valor: this.valor,
    destino: this.destino,
    fecha: new Date()
  }
  this.enviarDatos.emit(datos)
  this.limpiarCampos()
}
  limpiarCampos() {
    this.valor = ''
    this.destino = ''
  }
}
