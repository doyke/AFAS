var TestHelper = function() {
    this.get_sampled_data = function (size) {
        var data = [];
        for (var i=0; i<size; i++) {
            data[i] = Math.floor(2*Math.random());
        };
        return data;
    };
}