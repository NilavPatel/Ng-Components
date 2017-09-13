(function () {
    "use strict";

    angular
        .module("app")
        .component("menuApp", {
            templateUrl: '../src/app/shared/menu/menu.html',
            bindings: {},
            controller: "MenuController",
            controllerAs: "menuCtrl"
        })
})();