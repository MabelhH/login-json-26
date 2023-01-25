import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let mostrardatos=JSON.parse(localStorage.getItem('logueado')!)
      if(mostrardatos ){
        return true;
      }else{
        return false;
      }
    }
}
      // if(this.hasUser()){
      //   return true;
      // }else{

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Para ver Usuairo tienes que estar Logeado',
    //   showConfirmButton: false,
    //   timer: 3500
    // })
  // }
    //alert('Para ingresar a ver los usuarios debes de estar autenticado')
    // return false;
    // }

    // hasUser():boolean{
    
      // } 

