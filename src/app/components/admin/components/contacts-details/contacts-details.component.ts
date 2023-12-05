import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subscription} from 'rxjs';
import {User} from '../../user';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit, OnDestroy {

  id!: number;
  // user!: Observable<User>;
  user: User;
  activatedRouteSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data
    .subscribe(response => {
      this.user = response['param'];
    })
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
  }
}