angular.module('medicalApp')
  .controller('SupportCtrl', function ($rootScope, localStorageService) {
  	//$rootScope.supportData = "this data from support page";
  	//var myGlobal = "all data";
  	var sharingdata = "This is support page data";
  	/*localStorage.setItem('mydata', sharingdata);*/
  	console.log('localStorageService.isSupported==', localStorageService.isSupported);
/*
  	 function submit(key, val) {
   return localStorageService.set(key, val);
  }*/

  localStorageService.set('mydata1', sharingdata)

  });