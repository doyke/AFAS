app.service('afas.service', ['$q', function ($q) {
    
    var findRadios = function (radios, f) {
        return radios.filter(function(radio) {
            return radio.frequency === f;
        })
    };
    
    this.getAssignments = function (radios, frequencies) {
        if ( !(radios instanceof Array) )
            throw "An argument is not Array object.";
        
        if (!(radios[0] instanceof Radio))
            throw "An argument is not a Radio object.";
        
        var assignments = [];
        
        angular.forEach(frequencies, function(f, i) {
            var results = findRadios(radios, f);
            var a = {};
            if (results.length) {
                angular.forEach(results, function(r, i) {
                    a = { frequency: r.frequency, radioId: r.id };
                    assignments.push(a);
                });
            } else {
                a = { frequency: f, radioId: 0 };
                assignments.push(a);
            }
        });
        
        return assignments;
    };
    
    this.heatmap = function (data, svg, xLabels, yLabels, styles) {
        var colorScale = d3.scale.quantile()
            .domain([0, styles.buckets - 1, d3.max(data, function (d) {
                return d.value;
            })]).range(styles.colors);
              
        var cards = svg.selectAll(".x")
            .data(data, function(d) {
                return d.y+':'+d.x;
            });
        
        cards.enter().append("rect")
            .attr("x", function(d) { 
                return (d.x - 1) * styles.gridSize;
            })
            .attr("y", function(d) {
                return (d.y - 1) * styles.gridSize;
            })
            //.attr("rx", 2).attr("ry", 2)
            .attr("class", "x bordered")
            .attr("width", styles.gridSize).attr("height", styles.gridSize)
            .style("fill", styles.colors[0]);
        
        cards.transition().duration(1000)
            .style("fill", function(d) {
                return colorScale(d.value);
            });
        
        cards.select("title").text( function(d) {
            return d.value;
        });
        
        cards.exit().remove();
    };
    
    return this;
}]);