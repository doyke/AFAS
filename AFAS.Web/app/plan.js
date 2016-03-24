app.controller('PlanController', ['$scope', '$filter','afas.mock', 'afas.service', function($scope, $filter, factory, service) {
	var self = this;
    var radios = factory.get("radios");
    var frequencies = factory.get("frequencies");
    
    var xLabels = frequencies;
    var yLabels = radios.map( function (r) {
        return r.ident;
    });
    var data = [];
    angular.forEach(radios, function(r, i) {
        angular.forEach(frequencies, function(f, j) {
            var d = {y: +i, x: +j, value: (r.frequency != f) ? 0 : 1 }
            data.push(d);
        });
    });
    
    self.totalFrequencies = frequencies.length;
    self.totalRadios = radios.length;
    self.usedFrequencies = $filter('filter')(data, { value: 1 }).length;
    
    // Generate a heatmap    
    var config = {
        margin: { top: 100, right: 0, bottom: 50, left: 100 },
        colors: ["#eeeeee", "#1e6823"]
    }
    
    self.heatmap = function (id) {
        heatmapV1(xLabels, yLabels, data, id, config);
    }
}]);