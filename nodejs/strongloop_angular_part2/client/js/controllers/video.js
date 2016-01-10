angular.module('app')

  .controller('AllVideosController', ['$scope', 'Video', 
    function($scope, Video) {   
	  $scope.videos = Video.find(); 
    }
  ])

  .controller('MyVideosController', ['$scope', 'Video', '$rootScope',
    function($scope, Video, $rootScope) {
	    $scope.videos = Video.find({
	      filter: {
	    	  where: {
		          uservideoid: $rootScope.currentUser.id
		      }
	      }
	    });
    }
  ])
  
  .controller('AddVideoController', ['$scope', 'Video', '$state', '$rootScope',
    function($scope, Video, $state, $rootScope) {
	  
	    $scope.action = 'Add';
	    $scope.video = {};
	    $scope.isDisabled = false;
	    
	    $scope.submitForm = function() {
	    	Video
	          .create(
		          {
		            title: $scope.video.title,
		            url: $scope.video.url,
		            username: $scope.video.username,
		            date_published: $scope.video.date_published,
		            like: $scope.video.like,
		            dislike: $scope.video.dislike,
		            userId: $rootScope.currentUser.id,
		            uservideoid: $rootScope.currentUser.id
		          }
	          )
	        .$promise
	        .then(function() {
	          $state.go('all-videos');
	        },function(err){
	          $state.go('forbidden');
	        });
	    };
	    
    }
  ])
  
.controller('DeleteVideoController', ['$scope', 'Video', '$state', '$stateParams', 
  function($scope, Video, $state, $stateParams) {
	
    Video
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('my-videos');
      });
  }
])
  
.controller('EditVideoController', ['$scope', '$q', 'Video', '$stateParams', '$state', 
  function($scope, $q, Video, $stateParams, $state) {    
	$scope.action = 'Edit';
    $scope.video = {};
    $scope.isDisabled = true;
    $q.all([
      Video
      .findById({ id: $stateParams.id })
      .$promise
    ])
    .then(function(data) {
      $scope.video = data[0];
    });
    $scope.submitForm = function() {
      $scope.video
        .$save()
        .then(function(video) {
          $state.go('all-videos');
        },
        function(err){
        	$state.go('forbidden');
        });
    };
    
  }
])

;