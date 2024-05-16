const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

const app = require('../app'); 

describe("Color Code Converter API", function() {
  describe("RGB to Hex conversion", function() {
    it("returns status 200", function(done) {
      chai.request(app)
        .get("/rgbToHex?red=255&green=255&blue=255")
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it("returns the color in hex", function(done) {
      chai.request(app)
        .get("/rgbToHex?red=255&green=255&blue=255")
        .end(function(err, res) {
          expect(res.text).to.equal("#ffffff");
          done();
        });
    });
  });
});