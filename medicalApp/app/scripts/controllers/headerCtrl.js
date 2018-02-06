angular.module('medicalApp')
  .controller('headerCtrl', function ($location) {
    this.myAppName = 'Medtronic';
    this.menuNames =  [
    {name: 'Insulin Pump Therapy', page: 'contact'},
    {name: 'Products', page: 'products'},
    {name: 'Living with Diabetes', page: 'diabetes'},
    {name: 'Community', page: 'community'},
    {name: 'Support', page: 'support'},
    {name: 'Shop', page: 'shop'},
    {name: 'Contact', page: 'contact'}];
    // Nav item Click function
    this.menuItemClick = function(obj) {
    	$location.path(obj);
    };
  });
