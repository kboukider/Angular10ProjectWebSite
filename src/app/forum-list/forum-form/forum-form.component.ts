import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForumService} from '../../services/forum.service';
import {Router} from '@angular/router';
import {Forum} from '../../models/forum.model';

@Component({
  selector: 'app-forum-form',
  templateUrl: './forum-form.component.html',
  styleUrls: ['./forum-form.component.sass']
})
export class ForumFormComponent implements OnInit {

  forumForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private forumService: ForumService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.forumForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      text: ['', Validators.required],
      email: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveForum() {
    const title = this.forumForm.get('title').value;
    const author = this.forumForm.get('author').value;
    const text = this.forumForm.get('text').value;
    const email = this.forumForm.get('email').value;
    const newForum = new Forum(title, author, text, email);
    if (this.fileUrl && this.fileUrl !== '') {
      newForum.photo = this.fileUrl;
    }
    this.forumService.createNewForum(newForum);
    this.router.navigate(['/forum']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.forumService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }
  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}

