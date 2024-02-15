import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Site } from '../models/site.model';
import { Building } from '../models/building/building.model';
import { Tool } from '../models/tool.model';
import { Machine } from '../models/machinery.model';
import { Vehicle } from '../models/vehicle.model';
import { Furniture } from '../models/furniture.model';
import { Assets } from '../models/assets.model';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private http = inject(HttpClient);
  constructor() { }

  getAllSites(): Observable<Site[]> {
    return this.http.get<Assets>(`../assets/dummyData/assets.json`).pipe(
      map((response) => response.sites)
    )
  }

  getAllBuildings(): Observable<Array<Building>> {
    return this.http.get<Assets>(`../assets/dummyData/assets.json`).pipe(
      map((response) => response.buildings)
    )
  }

  getAllTools():Observable<Array<Tool>> {
    return this.http.get<Array<Tool>>(``).pipe(

    )
  }

  getAllMachines(): Observable<Array<Machine>> {
    return this.http.get<Array<Machine>>(``).pipe(

    )
  }

  getAllVehicles(): Observable<Array<Vehicle>> {
    return this.http.get<Array<Vehicle>>(``).pipe(

    )
  }

  getAllFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(``).pipe(

    )
  }
}
