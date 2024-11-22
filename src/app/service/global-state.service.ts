import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum KeyStorage {
  USER = 'user',
  ISLOGGEDIN = 'isLoggedIn',
}

import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  authState,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private _isLoggedIn = false;
  private _user: Observable<any> = authState(this.auth);
  private _storageInitialized = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.initStorage();
    this._user.subscribe(async (user) => {
      this._isLoggedIn = !!user;
      if (user) {
        const userData = this.extractUserData(user);
        await this.saveUser(userData);
      } else {
        await this.clearUser();
      }
    });
    this.restoreSession();
  }

  // Getter for login state
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  // Getter for user observable
  get user(): Observable<any> {
    return this._user;
  }

  // Initialize storage
  private async initStorage() {
    if (!this._storageInitialized) {
      await this.storage.create();
      this._storageInitialized = true;
      console.log('Storage initialized successfully');
    }
  }

  // Extract necessary user data
  private extractUserData(user: User) {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  }

  // Save user to storage
  private async saveUser(user: any) {
    await this.initStorage();
    await this.storage.set(KeyStorage.USER, user);
    await this.storage.set(KeyStorage.ISLOGGEDIN, true);
    console.log('User saved in storage:', user);
  }

  // Clear user from storage
  private async clearUser() {
    await this.initStorage();
    await this.storage.remove(KeyStorage.USER);
    await this.storage.set(KeyStorage.ISLOGGEDIN, false);
    console.log('User cleared from storage');
  }

  // Restore session from storage
  private async restoreSession() {
    await this.initStorage();
    const isLoggedIn = await this.storage.get(KeyStorage.ISLOGGEDIN);
    if (isLoggedIn) {
      console.log('Session restored');
      this._isLoggedIn = true;
    } else {
      this._isLoggedIn = false;
    }
  }

  // Login method
  async login(email: string, password: string): Promise<void> {
    try {
      const credentials = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User logged in:', credentials.user);
      const userData = this.extractUserData(credentials.user);
      await this.saveUser(userData);
      this.router.navigate(['']);
    } catch (error: any) {
      console.error('Login error:', error);
      this.showAlert('Login Error', error?.message || 'Error al iniciar sesión');
    }
  }

  // Logout method
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      await this.clearUser();
      this._isLoggedIn = false;
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Logout error:', error);
      this.showAlert('Logout Error', error?.message || 'Error al cerrar sesión');
    }
  }

  // Show alert
  private async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
