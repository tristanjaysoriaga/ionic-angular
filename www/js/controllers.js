angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, instagram) {
  $scope.test = { name: 'asf'};
  $scope.pics = [];

  $scope.instaList = function(){

    instagram.fetchPopular(function(data) {
        for(var i=0; i<data.length; i++) {
              $scope.pics.push(data[i]) ;
          }
    });
  }
  $scope.instaList();
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})



.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
