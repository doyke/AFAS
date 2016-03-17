app.controller('AssignmentChartController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
	var self = this;
    var radios = factory.get("radios");
    var frequencies = factory.get("frequencies");
    //var assignments = service.getAssignments(radios, frequencies);
    
    var x = frequencies;
    var y = radios;
    /*
    var y = radios.map(function (r) {
        return r.id;
    });
    */
    var data = [];
    angular.forEach(radios, function(r, i) {
        angular.forEach(frequencies, function(f, j) {
            var d = {y: +i, x: +j, value: (r.frequency != f) ? 0 : 1 }
            data.push(d);
        });
    });
    
    //self.print = JSON.stringify(data);
    var margin = { top: 50, right: 0, bottom: 100, left: 50 }
    var gridSize = 14;
    var width = gridSize*x.length - margin.left - margin.right;
    var height = gridSize*y.length - margin.top - margin.bottom;
    var legendElementWidth = gridSize*2;
    var buckets = 2;
    var colors = ["#eeeeee","#1e6823"];
    
    var svg = d3.select("#chart-assignment").append("svg")
        .attr("width", width + 2*margin.left + margin.right)
        .attr("height", height + 2*margin.top + 2*margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var radioLabels = svg.selectAll(".label-radio")
        .data(radios)
        .enter().append("text")
            .text(function (d) { return d.ident; })
            .attr("x", 0)
            .attr("y", function (d, i) { return (i-1) * gridSize; })
            .style("text-anchor", "end")
            .attr("transform", "translate(-18," + gridSize / 1.5 + ")")
            .attr("class", "mono axis");

    var frequencyLabels = svg.selectAll(".label-frequency")
        .data(x)
        .enter().append("text")
            .text(function(d) { return d; })
            .attr("x", function(d, i) { return (i-1) * gridSize; })
            .attr("y", 0)
            .style("text-anchor", "middle")
            .attr("transform",function(d, i) { 
                return "translate(" + (-3 + (i*gridSize)) + "," + (-40 + (i*gridSize)) +") rotate(-90)";
            })
            .attr("class", "mono axis");
    
    var styles = {
        margin: margin, 
        width: width, height: height, 
        gridSize: gridSize, 
        legendElementWidth: legendElementWidth, 
        buckets: buckets,
        colors: colors
    };
    
    service.heatmap(data, svg, radioLabels, frequencyLabels, styles);
    
}]);