'use strict'

var julian = require('astronomia/lib/julian')
var sexa = require('astronomia/lib/sexagesimal')
var planetposition = require('astronomia/lib/planetposition')
var venusData = require('astronomia/data/vsop87Bvenus')

console.log('Venus at 1992-12-20')
var jd = julian.CalendarGregorianToJD(1992, 12, 20)
var planet = new planetposition.Planet(venusData)
var pos = planet.position(jd)
var fk5 = planetposition.toFK5(pos.lon, pos.lat, jd)
console.log(new sexa.Angle(fk5.lon).toDegString(5), '26°.11409')
console.log(new sexa.Angle(fk5.lat).toDegString(5), '-2°.6206')
