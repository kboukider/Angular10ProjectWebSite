import {Component, OnDestroy, OnInit} from '@angular/core';
import {Forum} from '../models/forum.model';
import {Subscription} from 'rxjs';
import {ForumService} from '../services/forum.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.sass']
})
export class ForumListComponent implements OnInit, OnDestroy {
  forum: Forum[];
  forumSubscription: Subscription;

  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit() {
    this.forumSubscription = this.forumService.forumSubject.subscribe(
      (forum: Forum[]) => {
        this.forum = forum;
      }
    );
    this.forumService.getForum();
    this.forumService.emitForum();
  }

  onNewForum() {
    this.router.navigate(['/forum', 'new']);
  }

  onDeleteForum(forum: Forum) {
    this.forumService.removeForum(forum);
  }

  onViewForum(id: number) {
    this.router.navigate(['/forum', 'view', id]);
  }

  ngOnDestroy() {
    this.forumSubscription.unsubscribe();
  }
}
