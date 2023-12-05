import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, map, mapTo, merge, Observable, Subscription} from 'rxjs';
import {User} from '../../user';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {

  personalList!: User[];
  activatedRouteSubscription: Subscription;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data
    .subscribe(response => {
      this.personalList = response['param'];
    })
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
  }
}