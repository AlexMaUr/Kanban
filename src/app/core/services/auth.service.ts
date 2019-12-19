import { Injectable } from '@angular/core';

import { Store } from '@ngxs/store';
import * as firebase from 'firebase';
import { AuthInterface } from '../models/auth.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { SignInAction, SignUpAction } from '../../ngxs/auth/auth.actions';


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

  signIn(data: AuthInterface) {
    this.store.dispatch( new SignInAction(data) );
  }

  signInRequest({email, password}) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp({email, password, ...rest}) {
    const input: AuthInterface = {
      email,
      password
    };
    this.store.dispatch( new SignUpAction(input) );
  }

  signUpRequest({email, password}) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
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
