import { Component } from '@angular/core';
import { TransferenciasServiceService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferencias: any[] = []

  constructor(private service: TransferenciasServiceService){
    this.transferencias = this.service.transferencias
  }

  transferir($event: any){
    this.service.agregar($event)
  }
}
