var app = angular.module('mainApp', []);

app.factory('mainInfo', function ($http) {
    return $http.get('scripts/data.json');
});

app.controller('player', function ($scope, mainInfo) {
    var allInfo = [];
    $scope.allInfo = [];
    mainInfo.then(function (data){ 
        $scope.newJson = [{}];
        $scope.allMusic = data.data;
        $scope.reAragne =function(allMusic){
        $scope.counter = 0;
            for (i=0; i<allMusic.length; i++){
                for (j=0; j<allMusic[i].songs.length; j++){
                    $scope.counter ++
                    allInfo.push({
                        "id":  $scope.counter, 
                        "song":allMusic[i].songs[j].song,
                        "duration":allMusic[i].songs[j].duration,
                        "artist":allMusic[i].artist,
                        "album":allMusic[i].album,
                        "image":allMusic[i].image,
                        "genre":allMusic[i].genre,
                     });
                     
                }
            }
            $scope.songs = allInfo;
        };
       
        $scope.reAragne($scope.allMusic);
    });
   
    $scope.closeSort = function(){
         $scope.toggleSort = false;
    }
    
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
         $scope.propertyName = propertyName;
    };
    
    
    $scope.sortBy("song");
    $scope.toggleSort = false;
    
    $scope.play = 'hide';
    $scope.playThis = function(songArtist, songName, songDuration) {
        console.log(songName);
        $scope.songPlay = {};
        $scope.songPlay = {"artist": songArtist, "song": songName, "duration": songDuration}
        $scope.play = 'play';
    }
    
})
