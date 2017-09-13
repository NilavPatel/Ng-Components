(function () {
    "use strict";

    angular
        .module('app')
        .component('headerApp', {
            templateUrl: '../src/app/shared/header/header.html',
            bindings: {
                text: '='
            },
            controller: "HeaderController",
            controllerAs: "headerCtrl"
        });    
})();