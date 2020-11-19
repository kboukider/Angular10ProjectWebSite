import { Injectable } from '@angular/core';
import {Profile} from '../models/profile.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {Forum} from '../models/forum.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public profile: Profile[] = [];
  public profileSubject = new Subject<Profile[]>();

  constructor() { }

  emitProfile() {
    this.profileSubject.next(this.profile);
  }

  saveProfile() {
    firebase.database().ref('/profile').set(this.profile);
  }

  getProfile() {
    firebase.database().ref('/profile')
      .on('value', (data: DataSnapshot) => {
          this.profile = data.val() ? data.val() : [];
          this.emitProfile();
        }
      );
  }

  getSingleProfile(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/profile/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewProfile(newProfile: Profile) {
    this.profile.push(newProfile);
    this.saveProfile();
    this.emitProfile();
  }

  removeProfile(profile: Profile) {
    if(profile.photo) {
      const storageRef = firebase.storage().refFromURL(profile.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo supprimée !');
        },
        (error) => {
          console.log('Fichier non trouvé : ' + error);
        }
      );
    }
    const profileIndexToRemove = this.profile.findIndex(
      (profileEl) => {
        if (profileEl === profile) {
          return true;
        }
      }
    );
    this.profile.splice(profileIndexToRemove, 1);
    this.saveProfile();
    this.emitProfile();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
