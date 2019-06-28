"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var RoutersStore_1 = require("../stores/RoutersStore");
exports.WorkoutHistory = mobx_react_lite_1.observer(function () {
    var routerStore = React.useContext(RoutersStore_1.RouterStoreContext);
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "Workout History page: "),
        React.createElement(react_native_1.Button, { title: "Create Workout", onPress: function () {
                routerStore.screen = "CurrentWorkout";
            } })));
});
