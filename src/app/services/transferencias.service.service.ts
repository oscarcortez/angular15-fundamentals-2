import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasServiceService {
  listaTransferencias: any[]
  constructor() {
    this.listaTransferencias = []
  }

  get transferencias(){
    return this.listaTransferencias
  }

  agregar($event: any){
    this.transferencias.push($event)
  }
}
