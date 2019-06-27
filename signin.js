        var app = angular.module('postserviceApp', []);

        app.controller('postserviceCtrl', function ($scope, $http,  $timeout) {

        $scope.name = null;

        $scope.age = null;

        $scope.address = null;

        $scope.lblMsg = null;

        $scope.postdata = function (name, age, address) {

                                                    var data = {

                                                            name: name,

                                                            age: age,

                                                            address: address

                                                                };
                                                                getData(data)
                                                                }
function a() {
getDatafromdb().then( function(d) {
    $scope.data = d.data;
})

}
//Call the services
function getData(data) {
var ss = JSON.stringify(data);
return $http.post('http://localhost:8080/handlers/submit', ss).then( function(d) {

$timeout( function(){
    a()
        }, 5000 );
      return d
})
}
function getDatafromdb() {
return $http.get('http://localhost:8080/handlers/get')
}
$scope.acceptOffer = acceptOffer;
$scope.currentselecteduser = null;
function acceptOffer(x) {
$scope.currentselecteduser = x.name
} 
        

});