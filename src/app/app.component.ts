import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferencias: any[] = []

  constructor(private service: TransferenciasService){
    this.transferencias = this.service.transferencias
  }

  transferir($event: any){
    this.service.agregar($event)
  }
}
