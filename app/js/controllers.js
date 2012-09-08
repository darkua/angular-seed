'use strict';

/* Controllers */


function MyCtrl1() {
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function NavCntrl($scope, $location) {
  $scope.tabs = [
    {name:'View 1', path:"view1"},
    {name:'View 2', path:"view2"}
  ];
  $scope.isActive = function(page)
  {
    return (new RegExp(page).test($location.path()))?"active":"";
  };
}
MyCtrl2.$inject = ['$scope', '$location'];
