var Mondo = require('mondo');
var chai = require('chai');
var should = require('chai').should();

describe('formatting', function() {

    require('globalize/lib/cultures/globalize.culture.de-CH');

    Mondo.culture('de-CH');

    var date = new Date('2013-02-18 08:00');

    describe('date function', function() {

        it('should format given date', function() {
            var d = Mondo.date(date);
            d.should.be.a('string');
            d.should.equal('18.02.2013');
        });

        it('d alias function should produce the same output', function() {

            var d1 = Mondo.date(date);
            var d2 = Mondo.d(date);

            d2.should.equal(d2);

        });
    });

    describe('time function', function() {

        it('should format the given date', function() {
            var t = Mondo.time(date);
            t.should.be.a('string');
            t.should.equal('08:00');
        });

        it('t alias function should produce the same output', function() {
            var t1 = Mondo.time(date);
            var t2 = Mondo.t(date);
            t2.should.equal(t1);
        });

    });
});