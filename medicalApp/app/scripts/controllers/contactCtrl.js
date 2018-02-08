angular.module('medicalApp')
  .controller('ContactCtrl', function ($scope, localStorageService) {
  	//console.log(myGlobal);
  	//$scope.contactdata = localStorage.getItem('mydata');
  	console.log('ContactCtrl=======================', localStorageService.get('mydata1'))
  });