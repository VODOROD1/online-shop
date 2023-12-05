import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

export const isUserLoggedInGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  return auth.isLoggedIn();
}

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanDeactivate<any> {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(!this.authService.isLoggedIn()) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
  }

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isSure) {
      return true;
    } else {
      return false;
    }
  }
}
