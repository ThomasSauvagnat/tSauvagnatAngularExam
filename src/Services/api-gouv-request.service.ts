import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commune } from 'src/Models/Commune';
import { Departement } from 'src/Models/Departement';
import { Region } from 'src/Models/Region';

@Injectable({
  providedIn: 'root'
})
export class ApiGouvRequestService {

  public rawUrl: string = 'https://geo.api.gouv.fr';
  public regionUrl: string = '/regions';
  public departementUrl: string = '/departements';
  public communeUrl: string = '/communes';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<Array<Region>> {
    return this.httpClient.get<Array<Region>>(this.rawUrl + this.regionUrl);
  }

  getDepartmentByRegion(codeRegion: string): Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(this.rawUrl + this.regionUrl + '/' + codeRegion + this.departementUrl);
  }

  getCommunesByDepartment(codeDepartment: string): Observable<Array<Commune>> {
    return this.httpClient.get<Array<Commune>>(this.rawUrl + this.departementUrl + '/' + codeDepartment + this.communeUrl);
  }

  getDepartments(): Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(this.rawUrl + this.departementUrl);
  }

}
