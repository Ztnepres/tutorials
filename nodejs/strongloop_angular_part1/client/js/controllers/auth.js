angular.module('app')

.controller('SignUpController', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService ){

    $scope.register = function() {
		AuthService.register($scope.user.email, $scope.user.password)
	      // handle promise
	      // onsuccess
	      .then(function() {
	        $state.go('sign-up-success');
	      },
	      // onerror
	      function (err) {
	        // tbd
		});
    };
}])

.controller('AuthLoginController', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService) {

    $scope.login = function() {
      AuthService.login($scope.user.email, $scope.user.password)
      .then(function() {
        $state.go('all-videos');
      },
      function() {
        // tbd
      });
    };
}])

.controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
    function($scope, AuthService, $state) {
      AuthService.logout()
      .then(function() {
        $state.go('all-videos');
      },
      function() {
        // tbd
      });
    }
])


;