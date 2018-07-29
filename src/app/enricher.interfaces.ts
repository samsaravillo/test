import { HealthStatus } from './enums/lift-health-status.enum';

export interface IBooks {
    ID: number;

    Title: string;
    Description: string;
    PageCount: number;
  }
  
  export interface Todo {
    title: string;
    description: string;
    done: boolean;
  }

  export interface LiftActivities {
    id: number;
    type: string;
    payload?: {
      action: string;
      issue?: {
        url: string;
        id: number;
        issueNumber: number;
        ActTitle: string;
      }
    }
  }

export interface LMTopologyLiftCount {
    total: number;
}


export interface LMTopologyLift {
    id: string;
    name: string;
    information: {
        oem: {
            id: string;
            name: string;
        },
        building: {
            id: string;
            levels: any[];
            name: string;
        },
        type: any,
        capacity: any,
        speed: any,
        typeOfDoor: any,
        carSize: any,
        maintenanceBy: any,
        devices?: any[],
        minOpenDoorTime?: number,
        maxOpenDoorTime?: number,
        minCloseDoorTime?: number,
        maxCloseDoorTime?: number,
        minStrokeBuffer?: number,
        maxStrokeBuffer?: number

    }

    // optional: fill in missing properties
}

  export interface ITopologies { 
    liftId: string;
    name?: string;
    oem?: {
      id: string;
      name: string;
    }
    isActive?: boolean;
    status?: HealthStatus;
    comfortability?: number;
    usage?: number;
    lastMaintenance?: {
      date: number;
      duration: {
        value: number;
        unit: string
      }
    };
    majorBreakdown?: {
      times: number;
      year: number
    };
    lastActive?: {
      value: number;
      unit: string
    };
    lastTrip: {
      direction: 'UP' | 'DOWN';
      timestamp: Date;
      tripStartTime: Date;
      tripEndTime: Date;
      startLevel: number;
      endLevel: number;
      tripDuration: number;
    };
    devices?: any[];
    building?: {
      id: string;
      name: string;
      levels: any[];
    },
    type?: any,
    capacity?: any,
    speed?: any,
    typeOfDoor?: any,
    carSize?: any,
    maintenanceBy?: any,
    minOpenDoorTime?: number,
    maxOpenDoorTime?: number,
    minCloseDoorTime?: number,
    maxCloseDoorTime?: number,
    minStrokeBuffer?: number,
    maxStrokeBuffer?: number
  }

  export interface ITopoTest { 
      id: string;
      name: string;
      description: string;
      buildings?: {
              id: string;
              name: string;
              description: string;
              lmsDeviceZones: any[];
              devices: any[],
              elevators?: [
                  {
                      id: string;
                      name: string;
                      description: string;
                      lmsDeviceZones: any[];
                      devices?: [
                          {
                              id: string;
                              name: string;
                              parentHierarchy: string;
                              masterDataType: string;
                              externalRef: string;
                          }
                      ],
                      floorPlanSerialId: string;
                  }
              ]
          },
      validFrom: string;
      validTo: string;
  }
