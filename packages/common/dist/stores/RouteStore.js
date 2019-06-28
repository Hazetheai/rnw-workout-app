"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var istanbul_lib_report_1 = require("istanbul-lib-report");
var RouterStore_1 = require("./RouterStore");
var WorkoutStore_1 = require("./WorkoutStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.routerStore = new RouterStore_1.RouterStore(this);
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = istanbul_lib_report_1.createContext(new RootStore());
