

//data types
Tasks = new Mongo.Collection('tasks');

//new for entities
Entidade = new Mongo.Collection('entidade');
//Entidade.insert({nome : "Rui Luís Sousa de Albuquerque d'Orey", email:"rui.albuquerque.dorey@gmail.com", telefone: 917918464, tipo: "observador", privacidade: 1, user: "ruiorey" }); 

Local = new Mongo.Collection('local');

/*

Local.insert( 
  
  locais: [
      
      {   
        //so distritos... restantes dados vaos sendo sugeridos aos utilizadores
        distrito : "Porto", 
        
        conselhos: 

        [ 
        
          { 
            nome: "Porto",
            
            freguesias: [

              "Ramalde",
              
              "Francos"

            ]
              
          },
          
          { 
            nome: "Maia",
            
            freguesias: [

              "Aguas Santas",
              
              "Gueifães"

            ]
              
          }
        
        ] 
      }
    ]
  ); 


Denuncia = new Mongo.Collection('denuncia');

Denuncia.insert(  altura: new Date(), 

                  animais: 

                  [

                    {

                        nome  : "bolinhas",
                        tipo  : "cao",
                        idade : 12,
                        sexo  : "masculino",
                        cor   : "preto"

                    }

                  ] ,

                  caso: 

                    {

                      distrito: "Porto",

                      conselho: "Porto",
                      
                      freguesia: "Antas",

                      entidade_infrator: //TODO: ID ref,

                      numero_denuncia: 1242321,

                      estado processo: "Pendente",

                      descricao: "irem lopsim ads",

                    },

                  ficheiros:{
                    //TODO - ficheiro + privacidade
                    images: [],
                    documents: []

                  }



  );

//bases de dados extra
//estados processos
//tipos de privacidade
//


ALTURA - data + hora
ANIMAL - Nome, tipo (lista), idade, sexo, cor
CASO - LOCAL, ALTURA, ANIMAL, ENTIDADE INFRACTOR, varias nº denuncia (codigo processo), 
estado processo (lista), descriçao, 
FOTOS - secção, Anexos - fotos e secções com privacidade



numero de denuncia codigo do processo? formato deste numero. é um numero só?
estado do processo - lista é grande?



Animal = new Mongo.Collection('animal');



Animal.insert( 
  
  animais: [
      
      {   
        
        distrito : "Porto", 
        
        conselhos: 

        [ 
        
          { 
            nome: "Porto",
            
            freguesias: [

              "Ramalde",
              
              "Francos"

            ]
              
          },
          
          { 
            nome: "Maia",
            
            freguesias: [

              "Aguas Santas",
              
              "Gueifães"

            ]
              
          }
        
        ] 
      }
    ]
  ); 

*/

 

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


