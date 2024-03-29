angular.module('starter.services', [])

.factory('instagramService', ['$http', '$q',
    function($http, $q) {
        return {

            fetchPopular: function() {
 
                var endPoint = "https://api.instagram.com/v1/media/popular?client_id=3a4bb728466b4322ada463f66e748ca7&callback=JSON_CALLBACK";

                var defer = $q.defer();

                $http.jsonp(endPoint).then(function(response) {
                  defer.resolve(response.data);
                }, function(response) {
                  defer.reject(response);
                });

                return defer.promise;

            }

            // getComments: function (callback, mediaId) {
            //     console.log(mediaId);
            //     var endPoint = "https://api.instagram.com/v1/media/"+ mediaId +"/comments?client_id=3a4bb728466b4322ada463f66e748ca7&callback=JSON_CALLBACK"

            //     $http.jsonp(endPoint).success(function(response) {
            //         callback(response.data);
            //     });
            // }
        }
    }
])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
