import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';
import {Profile} from '../../models/profile.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.sass']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      text: ['', Validators.required],
      email: ['', Validators.required],
      promotion: ['', Validators.required],
      entreprise: ['', Validators.required],
      poste: ['', Validators.required],
      synopsis: ''
    });
  }


  onSaveProfile() {
    const nom = this.profileForm.get('nom').value;
    const prenom = this.profileForm.get('prenom').value;
    const text = this.profileForm.get('text').value;
    const email = this.profileForm.get('email').value;
    const promotion = this.profileForm.get('promotion').value;
    const entreprise = this.profileForm.get('entreprise').value;
    const poste = this.profileForm.get('poste').value;
    const newProfile = new Profile(nom, prenom, text, email, promotion, entreprise, poste);
    if (this.fileUrl && this.fileUrl !== '') {
      newProfile.photo = this.fileUrl;
    }
    this.profileService.createNewProfile(newProfile);
    this.router.navigate(['/profile']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.profileService.uploadFile(file).then(
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

