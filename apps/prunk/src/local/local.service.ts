import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  public setLogin(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public checkLogin(key: string) {
    return localStorage.getItem(key);
  }
}
