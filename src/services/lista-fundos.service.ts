import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListaFundosService {

  constructor(private http: HttpClient) { }

  public getListaFundos(): Observable<any>{
    return this.http.get('https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full');
  }

}
