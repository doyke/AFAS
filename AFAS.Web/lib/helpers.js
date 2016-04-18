var TestHelper = function() {
    
}

TestHelper.prototype.getSampledData = function (size) {
    var data = [];
    for (var i=0; i<size; i++) {
        data[i] = Math.floor(2*Math.random());
    };
    return data;
}

TestHelper.prototype.getRandomInteger = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Helper = function () {
    var self = this;
    
    self.get_compatability_by_distance = function (pos1, pos2, contour) {
        var v = geolib.isPointInCircle({latitude: pos1.latitude, longitude: pos1.longitude}, {latitude: pos2.latitude, longitude: pos2.longitude}, contour);
        return (v) ? 1 : 0;
    };
}

Helper.prototype.getCompatibilityValues = function (radios, contour) {
    var self = this;
    
    var compatabilities = [];
    var pointer = 0;
    for (var i=0; i<radios.length; i++) {
        for (var j=pointer; j<radios.length; j++) {
            if (i!=j) {
                var pos1 = { latitude: radios[i].latitude, longitude: radios[i].longitude };
                var pos2 = { latitude: radios[j].latitude, longitude: radios[j].longitude };
                
                compatabilities.push(self.get_compatability_by_distance(pos1, pos2, contour));
            }
        }
        pointer++;
    }
    return compatabilities;
}

Helper.prototype.onJsonChanged = function (id, data) {
    document.getElementById(id).addEventListener('change', handleFileSelect, false);
    var handleFileSelect = function(evt) {
        var files = evt.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function(e) {
                    try {
                        data = JSON.parse(e.target.result);
                    } catch (ex) {
                        console.error(ex);
                    }
                }
            })(f);
            reader.readAsText(f);
        }
    }
}