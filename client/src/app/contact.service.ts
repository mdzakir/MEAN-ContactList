import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  // FETCH CONTACTS
  getContacts() {
    // return this._http.get('http://localhost:3000/api/contacts').map(res => res.json());
    return this._http.get('http://localhost:3000/api/contacts');
  }

  // ADD CONTACT
  addContact(newContact) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/contact', newContact, {headers: headers});
  }

  // DELETE CONTACT
  deleteContact(id) {
    return this._http.delete('http://localhost:3000/api/contact/' + id);
  }
}
