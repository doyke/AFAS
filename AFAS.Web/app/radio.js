app.controller('RadioController', ['$scope', 'afas.mock', function($scope, factory) {
	var self = this;
    self.sortType     = 'frequency'; // set the default sort type
    self.sortReverse  = false;  // set the default sort order
    
    self.radios = factory.get("radios");
    
    self.getMode = function (value) {
        return Mode.properties[value].name;
    };
    
    self.getType = function (value) {
        return RadioType.properties[value].name;
    };
}]);