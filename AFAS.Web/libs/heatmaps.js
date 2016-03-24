var heatmapV1 = function(xLabels, yLabels, data, selectedElement, config) {
    
    var parentWidth = parseInt(d3.select(selectedElement).style("width"));
    var margin = config.margin;
    var width = parentWidth - margin.right - margin.left;
    var gridSize = width / xLabels.length
    var height = (gridSize*yLabels.length);
    var legendElementWidth = gridSize*2;
    var colors = config.colors;
    var buckets = colors.length;
    
    var colorScale = d3.scale.quantile()
            .domain([0, buckets - 1, d3.max(data, function (d) {
                return d.value;
            })]).range(colors);
    
    var svg = d3.select(selectedElement).append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
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
    
    var xAxis = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + gridSize + "," + 0 + ")");
        
    var yAxis = g.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 0 + "," + -gridSize + ")");
    
    var hLabels = xAxis.selectAll(".x-label")
        .data(xLabels)
        .enter().append("text")
            .text(function(d) { return d; })
            .attr("x", function(d, i) { return (i) * gridSize; })
            .attr("y", 0)
            .attr("transform",function(d, i) { 
                return "translate(" + (-5 + (i*gridSize)) + "," + (-30 + (i*gridSize)) +") rotate(-90)";
            })
            .attr("class", "mono");
            
    var vLabels = yAxis.selectAll(".y-label")
        .data(yLabels)
        .enter().append("text")
            .text(function (d) { return d; })
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize; })
            .style("text-anchor", "end")
            .attr("transform", "translate(-18," + gridSize / 1.5 + ")")
            .attr("class", "mono");
    
    var chart = g.append("g")
        .attr("class", "chart")
        .attr("transform", "translate(" + gridSize + "," + 0 + ")");
        
    var grids = chart.selectAll(".x")
            .data(data, function(d) {
                return d.y+':'+d.x;
            });
        
        grids.enter().append("rect")
            .attr("x", function(d) { 
                return (d.x - 1) * gridSize;
            })
            .attr("y", function(d) {
                return (d.y - 1) * gridSize;
            })
            .attr("class", "x bordered")
            .attr("width", gridSize).attr("height", gridSize)
            .style("fill", colors[0]);
        
        grids.transition().duration(1000)
            .style("fill", function(d) {
                return colorScale(d.value);
            });
        
        grids.select("title").text( function(d) {
            return d.value;
        });
        
        grids.exit().remove();
}