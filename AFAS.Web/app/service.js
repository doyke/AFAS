app.service('afas.service', ['$q', function ($q) {

    this.getNewNode = function (nodes) {
        console.log("node =" + nodes.length);
        var NewNodeCount = 0;
        angular.forEach(nodes, function (value, key) {
            if (!(value.latitude) || !(value.longitude) || !(value.areaId)) {
                NewNodeCount++;
            }
        });
        console.log("newNode" + NewNodeCount);
        return NewNodeCount;
    }

    this.wgs84Format = function (value) {
        console.log(value);
        if (value.degree && value.minute && value.second) {
            return pad(value.degree) + ' ' + pad(value.minute) + ' ' + pad(value.second) + ' ' + value.direction;
        }
        return '';
    }
    var pad = function (value) {
        return (value < 10) ? '0' + value : value;
    }
    return this;
}]);