(function () {
    "use strict";

    angular
        .module("app")
        .controller("MenuController", MenuController);
    
    MenuController.$inject = [];

    function MenuController() {
        var self = this;

        self.menus = [
            { title: "Home" },
            { title: "About Me" },
            {title:"Contact"}
        ];
    }
})();