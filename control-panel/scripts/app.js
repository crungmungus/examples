var MerchantListCtrl = function ($scope, storage) {
	$scope.merchants = merchants;
	$scope.unwanted = [{}];
	$scope.linked = storage.get();

	$scope.link = function () {
		var result = [], shared, i, j;
		
		// Not a great way of merging model data. For demo purposes only.
		for(i in $scope.wanted){
		   shared = false;
		   for (j in $scope.linked)
		       if ($scope.linked[j].name == $scope.wanted[i].name) {
		           shared = true;
		           break;
		       }
		   if(!shared) result.push($scope.wanted[i])
		}

		$scope.linked = $scope.linked.concat(result);
	};

	$scope.save = function () {
		storage.set($scope.linked);
	};

	$scope.delete = function () {
		for(i in $scope.unwanted){
 	    for (j in $scope.linked) {
        if ($scope.linked[j].name == $scope.unwanted[i].name) {
        	$scope.linked.splice(j, 1);
    		}   
      }
    }
	};
};


var control = angular.module('control', []);

control.factory('storage', function () {
  return {
    get: function (uid) {
      var i = 0, data = JSON.parse(localStorage.getItem('merchants') || '[]');  

      return data;
    },

    set: function (merchants) {
      localStorage.setItem('merchants', JSON.stringify(merchants));
    }
  };
});