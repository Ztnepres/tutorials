angular.module('app')

  .controller('SignUpController', ['$scope', 'AuthService', '$state', 
    function($scope, AuthService, $state) {
	  // prepopulate
	  $scope.user = {
        email: 'user1@email.com',
        password: 'passw0rd'
	  };
  
	  $scope.register = function() {
		AuthService.register($scope.user.email, $scope.user.password)
        // handle promise
        // onsuccess
        .then(function() {
          $state.go('sign-up-success');
        },
        // onerror
        function (err) {
          $state.go('forbidden');
        });
      };  
      
    }
  ])

  .controller('AuthLoginController', ['$scope', 'AuthService', '$state',
    function($scope, AuthService, $state) {
	  // prepopulate
	  $scope.user = {
		email: 'user1@email.com',
		password: 'passw0rd'
	  };
	  
	  $scope.login = function() {
        AuthService.login($scope.user.email, $scope.user.password)
        // onsuccess
        .then(function() {
          $state.go('all-videos');
        },
        // onerror
        function (err) {
          $state.go('forbidden');
        }
        );
      };
      
    }
  ])
  
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
    function($scope, AuthService, $state) {  
	  AuthService.logout()
	  // onsuccess
	  .then(function() {
        $state.go('all-videos');
      },
      // onerror
      function (err) {
        $state.go('forbidden');
      });
    }
  ])
  
;
