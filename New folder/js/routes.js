angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('nanana', {
    url: '/page2',
    templateUrl: 'templates/nanana.html',
    controller: 'nananaCtrl'
  })

  .state('aldub', {
    url: '/page3',
    templateUrl: 'templates/aldub.html',
    controller: 'aldubCtrl'
  })

  .state('milf', {
    url: '/page4',
    templateUrl: 'templates/milf.html',
    controller: 'milfCtrl'
  })

  .state('magBabato', {
    url: '/page5',
    templateUrl: 'templates/magBabato.html',
    controller: 'magBabatoCtrl'
  })

  .state('dunker', {
    url: '/page6',
    templateUrl: 'templates/dunker.html',
    controller: 'dunkerCtrl'
  })

  .state('allenIPhi', {
    url: '/page7',
    templateUrl: 'templates/allenIPhi.html',
    controller: 'allenIPhiCtrl'
  })

  .state('wrapppp', {
    url: '/page8',
    templateUrl: 'templates/wrapppp.html',
    controller: 'wrappppCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});