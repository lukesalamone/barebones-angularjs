angular.module('App', [])
    .controller('Controller', Controller);

function Controller(){
    var vm = this;

    const ITEMS = ['No frills', 'No extra libraries', 'Simply clone and get started'];

    activate();

    vm.clear = clear;
    vm.items = ITEMS;

    function activate(){
        if(vm.init) return;

        // do stuff here
        vm.text = '';
    }

    function clear(){
        vm.text = '';
    }
}
