import { Component, OnInit } from '@angular/core';
import {Forum} from '../../models/forum.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumService} from '../../services/forum.service';

@Component({
  selector: 'app-single-forum',
  templateUrl: './single-forum.component.html',
  styleUrls: ['./single-forum.component.sass']
})
export class SingleForumComponent implements OnInit {
  forum: Forum;

  constructor(private route: ActivatedRoute,
              private forumService: ForumService,
              private router: Router ) { }

  ngOnInit() {
    this.forum = new Forum('', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.forumService.getSingleForum(+id).then(
      (forum: Forum) => {
        this.forum = forum;
      }
    );
  }

  onBack() {
    this.router.navigate(['/forum']);
  }
}
