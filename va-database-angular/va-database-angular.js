

//data types
Tasks = new Mongo.Collection('tasks');

//new for entities
Entidade = new Mongo.Collection('entidade');


 

if (Meteor.isClient) {

 

  // This code only runs on the client

  angular.module('simple-todos',['angular-meteor']);

  

 
  //controller with variables and methods - second variable is $meteor which is a meteor controller
  angular.module('simple-todos').controller( 'TodosListCtrl', ['$scope', '$meteor',

    function ($scope, $meteor) {

 
      //tasks as meteor collection and returns all ordered
      $scope.tasks = $meteor.collection( function() {

            //returns tasklist with all 
            //return Tasks.find({}, { sort: { createdAt: -1 } })
            
            //returns tasklists (incomplete or all) and in a meteor reactive form
            return Tasks.find($scope.getReactively('query'), {sort: {createdAt: -1}})

      });

      //method to add tasks to the db
      $scope.addTask = function (newTask) {

        $scope.tasks.push( {

          text: newTask,

          createdAt: new Date() }

        );

      };


      //watches hideCompleted and makes the query conditions
      $scope.$watch('hideCompleted', function() {

      if ($scope.hideCompleted)

        $scope.query = {checked: {$ne: true}};

      else

        $scope.query = {};

      });

      //scope incomplete counter
      $scope.incompleteCount = function () {

        return Tasks.find({ checked: {$ne: true} }).count();

      };

 

 

 

    }]);


}


