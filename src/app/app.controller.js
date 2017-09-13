(function () {
    'use strict';

    angular
        .module("app")
        .controller("AppController", AppController);

    AppController.$inject = [];

    function AppController() {
        var self = this;
        self.header = "Test Application for Component based architecture";
    }

})();