import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  registration(body: any) {
    return this.http.post(
      'https://rentcar.stepprojects.ge/api/Users/register',
      body
    );
  }

  authorizaion(body: any) {
    return this.http.post(
      'https://rentcar.stepprojects.ge/api/Users/login',
      body,
      {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    );
  }

  checkTechInspection(number: any) {
    return this.http.get(
      `https://api.myauto.ge/ka/techinspect/getinspectiondate?license_number=${number}`
    );
  }

  checkVinNumber(body: any) {
    return this.http.post('https://api2.myauto.ge/ka/checkVin', body);
  }

  getVipCars() {
    return this.http.get(
      'https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=101&pageSize=10'
    );
  }

  getVipCarsForMyauto() {
    return this.http.get(
      'https://api2.myauto.ge/ka/services/quick-main-data/all/get'
    );
  }
}
