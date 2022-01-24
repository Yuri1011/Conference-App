import { LightningElement } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
  sessions = [];  //dont need to use @track because there is an override array
  connectedCallback() {
    getSessions().then(result => {
      this.sessions = this.allSessions = result;
    });
  }
}