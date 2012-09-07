/**
 * Created with JetBrains PhpStorm.
 * User: Yuriy Silvestrov
 * Date: 28.08.12
 * Time: 11:54
 * To change this template use File | Settings | File Templates.
 */
/*global define
 */

define(['require', 'lib/angular/angular', 'app'], function(require, angular) {
  'use strict';
  return require(['lib/require/domReady!'], function(document) {
    return angular.bootstrap(document, ['myApp']);
  });
});