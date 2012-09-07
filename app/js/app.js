define(['lib/angular/angular', 'controllers', 'directives', 'filters', 'services'], function(angular) {
  'use strict';

  // Declare app level module which depends on filters, and services
  return angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']);
});