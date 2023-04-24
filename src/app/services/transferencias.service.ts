import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasServiceService {
  listaTransferencias: any[]
  url: string = 'http://localhost:3000/transferencias'

  constructor(private HttpClient: HttpClient) {
    this.listaTransferencias = []
  }

  get transferencias(){
    return this.listaTransferencias
  }

  todas(): Observable<Transferencia[]>{
    return this.HttpClient.get<Transferencia[]>(this.url);
  }

  agregar($event: any){
    this.transferencias.push($event)
  }
}
