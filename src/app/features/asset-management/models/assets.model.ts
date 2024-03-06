import { Building } from "./building/building.model";
import { Furniture } from "./furniture.model";
import { Machine } from "./machinery.model";
import { Site } from "./site.model";
import { Tool } from "./tool.model";
import { Vehicle } from "./vehicle.model";

export class Assets{
  "sites": Array<Site>;
  "buildings": Array<Building>;
  "tools": Array<Tool>;
  "machinery": Array<Machine>;
  "furniture": Array<Furniture>;
  "vehicles": Array<Vehicle>;
}
