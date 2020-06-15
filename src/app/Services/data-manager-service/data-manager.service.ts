import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  serverHostname : String = "http://localhost:8000";

  constructor() { }

  getServerHostname()
  {
      return this.serverHostname;
  }
}
