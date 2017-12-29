import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('data service runs...');

  }

  getNames() {
    return this.http.get('http://localhost/backend/src/getstylistDetails.php/')
      .map(res => res.json());

  }

  getSkills() {
    return this.http.get('http://localhost/backend/src/getSkills.php/')
      .map(res => res.json());

  }

  getProfPic() {
    return this.http.get('http://localhost/backend/src/getProfilePic.php/')
      .map(res => res.json());

  }

  getStylistSkills() {
    return this.http.get('http://localhost/backend/src/getStylistSkills.php/')
      .map(res => res.json());

  }
}
