import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  formRegister!:FormGroup;
  datos:any=[];
 

  constructor(private formularioservice:FormularioService , private router:Router){
    this.formRegister = new FormGroup({
      usermane: new FormControl(),
      password: new FormControl(),
      
    })
  }
  
    ngOnInit(): void {
      this.formularioservice.getAll().subscribe(formularioservice =>this.datos=formularioservice);
    }

  registrar(){
       console.log(this.formRegister.value)
       
  }
  
  login(){
    for(let i = 0 ; i < this.datos.length;i++){
      if(this.datos[i].usermane == this.formRegister.get('username')?.value && this.datos[i].email==this.formRegister.get('password')?.value){
        localStorage.setItem('logueado','true')
        this.router.navigate(['/prueva'])
        break
      
      }else{
        localStorage.setItem('logueado','false')
      }
    }
   console.log(localStorage.getItem('logueado'))
   
  }
 

}
