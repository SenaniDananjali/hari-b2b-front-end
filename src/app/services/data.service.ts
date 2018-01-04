import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('data service runs...');

  }

  getNames() {
    return this.http.get('http://localhost/backend/src/api.php?f=getStylistDetails')
      .map(res => res.json());

  }

  getSkills() {
    return this.http.get('http://localhost/backend/src/api.php?f=getSkills')
      .map(res => res.json());

  }

  getProfPic() {
    return this.http.get('http://localhost/backend/src/api.php?f=getPorfilePic')
      .map(res => res.json());

  }

  getStylistSkills() {
    return this.http.get('http://localhost/backend/src/api.php?f=getStylistSkills')
      .map(res => res.json());

  }

  getBusyDates() {
    return this.http.get('http://localhost/backend/src/api.php?f=getBusyDates')
      .map(res => res.json());

  }
  getLocations() {
    return this.http.get('http://localhost/backend/src/api.php?f=getPreferredLocations')
      .map(res => res.json());
  }
  getStylistJob() {
    return this.http.get('http://localhost/backend/src/api.php?f=getJobRole')
      .map(res => res.json());
  }
  getJob() {
    return this.http.get('http://localhost/backend/src/api.php?f=job')
      .map(res => res.json());
  }

  getLocationsForSearch() {
    return this.http.get('http://localhost/backend/src/api.php?f=locationForSearch')
      .map(res => res.json());
  }

}
