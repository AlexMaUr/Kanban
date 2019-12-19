import { Injectable } from '@angular/core';

import { Store } from '@ngxs/store';
import * as firebase from 'firebase';
import { AuthInterface } from '../models/auth.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store,
    public  afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) {
  }

  signIn({email, password}) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signInRequest(data: AuthInterface) {
  }

  signUp({email, password, ...rest}) {
    const input: AuthInterface = {
      email,
      password
    };
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signUpRequest() {
  }

  logout() {
    return this.afAuth.auth.signOut()
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        window.alert(error);
      });
  }

  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.error(error);
      });
  }
}
