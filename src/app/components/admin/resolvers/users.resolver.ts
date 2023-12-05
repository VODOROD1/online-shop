import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../user';
import { AdminService } from '../services/admin.service';
import { EMPTY, Observable, catchError, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class usersResolver implements Resolve<User[]> {

  constructor(private adminService: AdminService, private router: Router) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]>{
    return this.adminService.getPersonalList().pipe(
      delay(2000),
      catchError(() => {
        this.router.navigate(['home']);
        return EMPTY;
      })
    )
  }
}
