import {Component, OnDestroy, OnInit} from '@angular/core';
import {Profile} from '../models/profile.model';
import {Subscription} from 'rxjs';
import {ProfileService} from '../services/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.sass']
})
export class ProfileListComponent implements OnInit, OnDestroy {
  profile: Profile[];
  profileSubscription: Subscription;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profileSubscription = this.profileService.profileSubject.subscribe(
      (profile: Profile[]) => {
        this.profile = profile;
      }
    );
    this.profileService.getProfile();
    this.profileService.emitProfile();
  }

  onNewProfile() {
    this.router.navigate(['/profile', 'new']);
  }

  onDeleteProfile(profile: Profile) {
    this.profileService.removeProfile(profile);
  }

  onViewProfile(id: number) {
    this.router.navigate(['/profile', 'view', id]);
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
