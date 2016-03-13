var RadioType = {
    UNKNOWN: 0,
    NDB: 1,
    DME: 2,
    TACAN: 3,
    VORTAC: 4,
    properties: {
        0: {name: 'Unknown'},
        1: {name: 'NDB'},
        2: {name: 'DME'},
        3: {name: 'TACAN'},
        4: {name: 'VORTAC'}
    }
}

var Mode = {
    UNKNOWN: 0,
    AM: 1,
    properties: {
        0: {name: 'Unknown'},
        1: {name: 'AM'}
    }
}

var Location = function (id, name, icao) {
    this.id = id;
    this.name = name;
    this.icao = icao;
}

var Radio = function (id, type, mode, ident, frequency, latitude, longitude, altitude) {
    this.id = id;
    this.name = null;
    this.type = type;
    this.mode = mode;
    this.ident = ident;
    this.frequency = frequency;
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
    this.location = null;
}

Radio.prototype.locates = function locates(loc) {
    this.location = loc;
}

