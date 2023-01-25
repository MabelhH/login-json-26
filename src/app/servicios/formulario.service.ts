import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
url="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { 
    console.log('lista')
  }
}
