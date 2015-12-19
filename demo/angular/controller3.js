/**
 * Created by ziyu - Think on 2015/10/17.
 */

(function(){
    var app = angular.module('myApp',[]);
    app.controller('nameCtrl',function($scope){
       $scope.names=[{
           name:'test',
           country:'norway'
       },
           {
               name:'test2',
               country:'sweden'
           },
           {
               name:'test3',
               country:'test3'
           }
       ]
    });

    app.controller('nameCtrl2',function($http,$scope){
        var _data = {
            t:1

        };
        $http.post('json/test1.json',_data).success(function(rs){
            console.log(rs);
            if(rs.code == 200){
                $scope.names = rs.data.names;
            }

        });
    });
})();


