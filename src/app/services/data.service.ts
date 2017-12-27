import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('hello');

  }

  getPosts() {
    return this.http.get('http://localhost/backend/src/getstylistDetails.php/')
      .map(res => res.json());

  }
}
