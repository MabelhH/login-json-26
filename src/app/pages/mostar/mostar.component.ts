import { Component ,OnInit} from '@angular/core';
import { FormularioService } from 'src/app/servicios/formulario.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostar',
  templateUrl: './mostar.component.html',
  styleUrls: ['./mostar.component.css']
})
export class MostarComponent  implements OnInit {
   input:any=[];
   enviar:string|null='';
   descripcion:number=1;
  

   constructor(private user:FormularioService,private route :ActivatedRoute ,private location:Location){}
  
  ngOnInit(): void {
    //this.datos.getAll().subscribe(datos =>console.log(datos));
  this.user.getAll().subscribe(user =>this.input=user);
  this.enviar=this.route.snapshot.paramMap.get('id'); 
  if(this.enviar!=null){
    this.descripcion=parseInt(this.enviar);
  }  
 }
  
  
 boton():void{
   this.location.back();
 }
}
