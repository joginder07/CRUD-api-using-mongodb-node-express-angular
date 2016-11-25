   angular.module('myApp', [])
      .controller('MyController', ['$scope','$http', function ($scope,$http) {
                
	    var refresh = function () {
			$http.get('/contactlist').success(function(response){
				$scope.contactlist = response; 
				$scope.contact="";
			});
	    };

	    refresh();

		
		$scope.addcontact= function() {
			$http.post('/contactlist',$scope.contact).success(function(response) {
				refresh();
			});
		};

		$scope.remove = function(id) {			
			$http.delete('/contactlist/'+id).success(function(response) {
				refresh();
			});
		};

      }]);

