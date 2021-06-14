
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { isNullOrEmptyJson } from '../utils/objectUtil';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authenService: AuthenticationService
  ) { }

  private isEmpty(object: any){
    return Object.keys(object).length === 0;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let currentUser = this.authenService.currentUserValue;
    console.log("CAN ACTIVE GUARD")
    if(isNullOrEmptyJson(currentUser)!=null){
      return true;
    }
    this.router.navigate(['/login'],{queryParams:{returnURL: state.url}});
    return false;
  }


}
