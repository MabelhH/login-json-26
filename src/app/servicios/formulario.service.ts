import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { usuario } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

url="https://jsonplaceholder.typicode.com/users"

  constructor(private https:HttpClient) { 
    console.log('lista')
  }

  getAll():Observable<string[]>{
    return this.https.get<string[]>(this.url)
  }
  
}
