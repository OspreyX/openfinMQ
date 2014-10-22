/* global socket, angular  */

angular.module('tmatrix')
    .controller('MainCtrl', function($scope) {

        $scope.model = [];
        $scope.date = Date.now();

        socket.on('demo', function(msg){
            var msgObj = JSON.parse(msg);
            
            $scope.model = msgObj.demo;
            
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        });
    });