import { Component, OnInit } from '@angular/core';
import {Profile} from '../../models/profile.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.sass']
})
export class SingleProfileComponent implements OnInit {
  profile: Profile;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private router: Router ) { }

  ngOnInit() {
    this.profile = new Profile('', '', '', '', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.profileService.getSingleProfile(+id).then(
      (profile: Profile) => {
        this.profile = profile;
      }
    );
  }

  onBack() {
    this.router.navigate(['/profile']);
  }
}
