app.controller('AssignmentChartController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
	var self = this;
    var radios = factory.get("radios");
    var frequencies = factory.get("frequencies");
    //var assignments = service.getAssignments(radios, frequencies);
    
    var x = frequencies;
    var y = radios.map(function (r) {
        return r.id;
    });
    
    var data = [];
    angular.forEach(radios, function(r, i) {
        angular.forEach(frequencies, function(f, j) {
            var d = {y: +r.id, x: +f, value: (r.frequency != f) ? +0 : +1 }
            data.push(d);
        });
    });
    
    // self.print = JSON.stringify(self.data);
    
    var margin = { top: 50, right: 0, bottom: 100, left: 30 },
        width = 1900 - margin.left - margin.right,
        height = 1600 - margin.top - margin.bottom,
        gridSize = Math.floor(width / 256),
        legendElementWidth = gridSize*2,
        buckets = 9,
        colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
    
    var svg = d3.select("#chart-assignment").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var radioLabels = svg.selectAll(".label-radio")
        .data(y)
        .enter().append("text")
            .text(function (d) { return d; })
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize; })
            .style("text-anchor", "end")
            .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
            .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis");
    });

    var frequencyLabels = svg.selectAll(".label-frequency")
        .data(x)
        .enter().append("text")
            .text(function(d) { return d; })
            .attr("x", function(d, i) { return i * gridSize; })
            .attr("y", 0)
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + gridSize / 2 + ", -6)")
            .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); 
    });
    
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