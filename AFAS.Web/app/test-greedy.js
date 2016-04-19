app.controller('TestGreedyController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
	var self = this;
    self.outputs = [];
    
    var gdy = new Greedy();
    var helper = new TestHelper();    
    var size = 20;
    //var data = helper.getSampledData(size*(size-1)/2);
    var data = [1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1]
    
    var A = Array(size).fill(0);
    var C = gdy.get_compatibility_matrix(data, size);
    var F = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var minF = 10, maxF = 100;
    var cost = 0;
    
    while (A.indexOf(0) > -1) {
        // f = helper.getRandomInteger(minF, maxF);
        // F.push(f);
        cost = gdy.solve(A, C, F);
        // self.outputs.push('Frequencies=[' + F + '], Assignments=[' + A + '], Total cost = '+ cost);
    }
}]);