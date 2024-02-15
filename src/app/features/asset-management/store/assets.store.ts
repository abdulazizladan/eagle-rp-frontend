import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Site } from "../models/site.model";
import { Building } from "../models/building/building.model";
import { Machine } from "../models/machinery.model";
import { Tool } from "../models/tool.model";
import { Furniture } from "../models/furniture.model";
import { Vehicle } from "../models/vehicle.model";
import { computed, inject } from "@angular/core";
import { AssetsService } from "../services/assets.service";

export type assetsState = {
  sites: Site[];
  buildings: Building[];
  machinery: Machine[];
  tools: Tool[];
  furniture: Furniture[];
  vehicles: Vehicle[];
  isLoading: boolean;
}

export const initialState: assetsState = {
  sites: [],
  buildings: [],
  machinery: [],
  tools: [],
  furniture: [],
  vehicles: [],
  isLoading: false
}

export const assetsStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    sitesCount: computed(() => state.sites.length),
    buildingsCount: computed(() => state.buildings().length),
    machineryCount: computed(() => state.machinery().length),
    toolsCount: computed(() => state.tools().length),
    furnitureCount: computed(() => state.furniture().length),
    vehiclesCount: computed(() => state.vehicles().length)
  })),
  withMethods((state, assetsService = inject(AssetsService)) => (
    {
      async loadAllSites() {
        patchState(state, {
          isLoading: true,
          sites: []
        });
        assetsService.getAllSites().subscribe((sites) => {
        patchState(state, {
          sites,
          isLoading: false
        });
      })
    },
    loadAllBuildings() {
      patchState(state, {
        isLoading: true
      })
    },
    loadAllMachines() {
      patchState(state, {
        isLoading: true
      })
    },
    loadAllTools() {
      patchState(state, {
        isLoading: true
      })
    },
    loadAllFurniture() {
      patchState(state, {
        isLoading: true
      })
    },
    loadAllVehicles() {
      patchState(state, {
        isLoading: true
      })
    },
    addSite() {
      patchState(state, {sites: [...state.sites(), {
        "id": "222",
        "code": "asdb",
        "name": "main",
        "buildings": []
      }]})
    },
    addBuilding() {

    },
    addMachine() {

    },
    addTool() {

    },
    addFurniture() {

    },
    addVehicle() {

    },
    update() {

    },
    delete() {

    }
  })),
  withHooks({
    onInit({
      loadAllSites,
      loadAllBuildings,
      loadAllFurniture,
      loadAllMachines,
      loadAllTools,
      loadAllVehicles}){
      loadAllSites();
      loadAllBuildings();
      loadAllFurniture();
      loadAllMachines();
      loadAllTools();
      loadAllVehicles();
    },
    onDestroy() {

    }
  })
)
