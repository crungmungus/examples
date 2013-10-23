var offers = (function () {
  "use strict"; 

  // Basic list controller.
  var OfferCtrl = function ($scope) {
    $scope.offers = _(data);

    // Get redemption code from remote location.
    $scope.getCode = function (id) {
      var offer = this.offers.findWhere({'id' : id});

      if(offer) {
        console.log('Requesting code from server (id: ' + id + ' )...');
        this.code = 'VOUCHER-CODE-HERE';
      }
    }

    // Add more offers to the list.
    $scope.getMore = function () {
      $scope.offers._wrapped.join(data);
      console.log($scope.offers);
    }
  };

  return {
    OfferCtrl : OfferCtrl
  }
}());

// Should only require one controller for now.
var offers = angular.module('offers', [])
  .controller('OfferCtrl', offers.OfferCtrl);