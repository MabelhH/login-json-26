import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';
@Component({
  selector: 'app-prueva',
  templateUrl: './prueva.component.html',
  styleUrls: ['./prueva.component.css']
})
export class PruevaComponent implements OnInit {

  input:any=[];

  constructor(private formularioservice:FormularioService , private router:Router){}

  ngOnInit(): void {
    this.formularioservice.getAll().subscribe(formularioservice =>this.input=formularioservice); 
  }
  
  mostrar(id:number){
    this.router.navigate(['/mostar',id])
  }
  eliminar(id:number){
    this.input.splice(id,1)
   }
}
