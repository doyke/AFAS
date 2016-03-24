app.controller('TestGreedyController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
	var self = this;
    var gdy = new Greedy();
    var helper = new TestHelper();
    
    // gdy.test(helper.getSampledData(10*(10-1)/2), 10);
    gdy.test([1, 1, 0, 1, 1, 1, 0, 1, 1, 1], 5);
}]);