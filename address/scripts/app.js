var app = (function () {
  "use strict"; 

  // Basic list controller.
  var ContactListCtrl = function ($scope, Storage) {
    $scope.contacts = Storage.get();
  };

  // Controller to view a selected contact.
  var ContactViewCtrl = function ($scope, $routeParams, Storage) {
    $scope.contact = Storage.get($routeParams.id);
  };

  // Controller to update contacts in local storage.
  var ContactEditCtrl = function ($scope, $routeParams, $location, Storage) {
    var contacts = Storage.get();

    if($routeParams.id) {
      $scope.contact = Storage.get($routeParams.id);
    }

    $scope.save = function (contact) {
      var i = 0;

      if(!contact.uid) {
        contact.uid = contacts.length + 1;
        contacts.push(contact);
      } else {
        for(i = 0; i < contacts.length; i++) {
          if(contacts[i].uid == $routeParams.id) {
            contacts[i] = contact;
          }
        }
      }

      // Bulk update to local storage.
      Storage.set(contacts);
      $location.path('/contact/view/' + $scope.contact.uid);
    }

    $scope.delete = function () {
      var index, i;

      for(i = 0; i < contacts.length; i++) {
        if(contacts[i].uid == $routeParams.id) {
          index = i;
          break;
        }
      }

      contacts.splice(index, 1);
      Storage.set(contacts);
      $location.path('/');
    }
  };

  return {
    ContactListCtrl : ContactListCtrl,
    ContactViewCtrl : ContactViewCtrl,
    ContactEditCtrl : ContactEditCtrl
  }
}());

// 
var contacts = angular.module('contacts', []);

//
contacts.factory('Storage', function () {
  return {
    get: function (uid) {
      var i = 0, data = JSON.parse(localStorage.getItem('contacts') || '[]');  

      // Slow method of selection for example use only.
      if(uid && typeof uid === 'string') {
        for(i = 0; i < data.length; i++) {
          if(data[i].uid == uid) {
            return data[i];
          }
        }
      } else {
        return data;
      }
    },

    set: function (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  };
});

// Directive to prevent default on anchors.
contacts.directive('noClick', function() {
    return function(scope, element, attrs) {
      angular.element(element).bind('click', function(event) {
        event.preventDefault();
      });
    }
})

contacts.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {templateUrl: 'list.html', controller: app.ContactListCtrl}).
    when('/contact/view/:id', {templateUrl: 'view.html', controller: app.ContactViewCtrl}).
    when('/contact/edit/:id', {templateUrl: 'edit.html', controller: app.ContactEditCtrl}).
    when('/contact/delete/:id', {controller: app.ContactEditCtrl}).
    when('/contact/add', {templateUrl: 'edit.html', controller: app.ContactEditCtrl}).
    otherwise({redirectTo: '/'});
}]);