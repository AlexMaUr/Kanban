import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  getToken() {
    return localStorage.getItem('kanban_token');
  }

  setToken(token: string) {
    localStorage.setItem('kanban_token', token);
  }

  removeToken() {
    localStorage.removeItem('kanban_token');
  }
}
