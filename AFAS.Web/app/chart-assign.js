app.controller('AssignmentChartController', ['$scope', '$filter','afas.mock', 'afas.service', function($scope, $filter, factory, service) {
	var self = this;
    var radios = factory.get("radios");
    var frequencies = factory.get("frequencies");
    //var assignments = service.getAssignments(radios, frequencies);
    
    var x = frequencies;
    var y = radios;
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
    
    //self.print = JSON.stringify(data);
    var margin = { top: 70, right: 0, bottom: 0, left: 40 }
    var gridSize = 12;
    var width = gridSize*x.length - margin.left - margin.right;
    var height = gridSize*y.length - margin.top - margin.bottom;
    var legendElementWidth = gridSize*2;
    var buckets = 2;
    var colors = ["#eeeeee","#1e6823"];
    
    var svg = d3.select("#chart-assignment").append("svg")
        .attr("width", width + 2*margin.left + margin.right)
        .attr("height", height + 2*margin.top + 2*margin.bottom);
    
    var colorScale = d3.scale.quantile()
            .domain([0, buckets - 1, d3.max(data, function (d) {
                return d.value;
            })]).range(colors);
    
    var legend = svg.selectAll(".legend")
            .data([0].concat(colorScale.quantiles()), function(d) { 
                return d;
            });
        
        legend.enter().append("g").attr("class", "legend");
        
        legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * (i); })
            .attr("y", 0)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });
        
        legend.append("text")
            .attr("class", "mono")
            .text(function(d) { return "≥ " + Math.round(d); })
            .attr("x", function(d, i) { return legendElementWidth * (i); })
            .attr("y", 20);
        
        legend.exit().remove();
        
    var contentGroup = svg.append("g")
        .attr("class", "group-content")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var radioLabels = contentGroup.selectAll(".label-radio")
        .data(radios)
        .enter().append("text")
            .text(function (d) { return d.ident; })
            .attr("x", 0)
            .attr("y", function (d, i) { return (i-1) * gridSize; })
            .style("text-anchor", "end")
            .attr("transform", "translate(-18," + gridSize / 1.5 + ")")
            .attr("class", "mono axis");

    var frequencyLabels = contentGroup.selectAll(".label-frequency")
        .data(x)
        .enter().append("text")
            .text(function(d) { return d; })
            .attr("x", function(d, i) { return (i-1) * gridSize; })
            .attr("y", 0)
            .attr("transform",function(d, i) { 
                return "translate(" + (-3 + (i*gridSize)) + "," + (-30 + (i*gridSize)) +") rotate(-90)";
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
    
    service.heatmap(data, contentGroup, radioLabels, frequencyLabels, styles);
    
}]);