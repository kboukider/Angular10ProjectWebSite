import { Injectable } from '@angular/core';
import {Forum} from '../models/forum.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  public forum: Forum[] = [];
  public forumSubject = new Subject<Forum[]>();

  constructor() { }

  emitForum() {
    this.forumSubject.next(this.forum);
  }

  saveForum() {
    firebase.database().ref('/forum').set(this.forum);
  }

  getForum() {
    firebase.database().ref('/forum')
      .on('value', (data: DataSnapshot) => {
          this.forum = data.val() ? data.val() : [];
          this.emitForum();
        }
      );
  }

  getSingleForum(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/forum/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewForum(newForum: Forum) {
    this.forum.push(newForum);
    this.saveForum();
    this.emitForum();
  }

  removeForum(forum: Forum) {
    if(forum.photo) {
      const storageRef = firebase.storage().refFromURL(forum.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo supprimée !');
        },
        (error) => {
          console.log('Fichier non trouvé : ' + error);
        }
      );
    }
    const forumIndexToRemove = this.forum.findIndex(
      (forumEl) => {
        if (forumEl === forum) {
          return true;
        }
      }
    );
    this.forum.splice(forumIndexToRemove, 1);
    this.saveForum();
    this.emitForum();
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
