import { RootStore } from "./RouteStore";
declare type Routes = "WorkoutHistory" | "CurrentWorkout";
export declare class WorkoutStoreRouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    screen: Routes;
}
export {};
