;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('SuperService', ['$http', 'HEROKU', '$location',

    function ($http, HEROKU, $location) {

      var register = HEROKU.URL + '/business_user/register';

      var master = HEROKU.URL + '/employee_user/sregister';

      this.createAccount = function (user) {
       $http.post(register, user)
        .success( function (data) {
          console.log(data);
          $location.path('/master/create');
        });

        };

      this.createMaster = function (user) {
        $http.post(master, user)
          .success( function (data) {
            console.log(data);

        });

        };



      }

  ]);

}());