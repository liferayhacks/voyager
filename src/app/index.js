'use strict';
/* globals window */

angular.module('polestar', [
    'vlui',
    'zeroclipboard',
    'Chronicle',
    '720kb.tooltips',
    'LocalStorageModule',
    'ngOrderObjectBy',
    'angular-websql'
  ])
  .constant('_', window._)
  .constant('vl', window.vl)
  .constant('vg', window.vg)
  .constant('Papa', window.Papa)
  .constant('Blob', window.Blob)
  .constant('URL', window.URL)
  .config(['uiZeroclipConfigProvider', function(uiZeroclipConfigProvider) {
    // config ZeroClipboard
    uiZeroclipConfigProvider.setZcConf({
      swfPath: 'bower_components/zeroclipboard/dist/ZeroClipboard.swf'
    });
  }]);

angular.module('voyager', ['vlui', 'polestar', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
  .constant('_', window._)
  .constant('jQuery', window.$)
  .constant('vl', window.vl)
  .constant('vg', window.vg)
  .constant('cp', window.cp)
  .constant('tv4', window.tv4)
  .constant('Papa', window.Papa)
  .constant('Tether', window.Tether)
  .constant('Drop', window.Drop)
  .constant('dl', window.dl)
  .constant('consts', {
    addCount: true, // add count field to Dataset.dataschema
    debug: true,
    debugInList: true,
    useUrl: true,
    numInitClusters: 15,
    numMoreClusters: 9,
    logging: false,
    appId: 'voyager',
    enableExclude: true
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
