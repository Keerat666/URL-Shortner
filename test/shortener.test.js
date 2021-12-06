let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app = require('../app');
const Url = require('../models/url_model')

chai.use(chaiHttp);

describe('URL Testing for POST Request', () => {
    it('URL Check 1 - Existing URL', (done) => {
        let body = {
            longUrl: "https://github.com/Keerat666"
        }
        chai.request(app)
            .post('/shorten')
            .send(body)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('This url has already been shortened');
                done();
            });
    });

    it('URL Check 2  - Valid URL', (done) => {
        let body = {
            longUrl: "https://randomsite.com"
        }
        chai.request(app)
            .post('/shorten')
            .send(body)
            .end(async (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Url shortened successfully');
                await Url.findOneAndDelete({"longUrl" : "https://randomsite.com"});
                done();
            });
    });

    it('URL Check 3 - Invalid URL', (done) => {
        let body = {
            longUrl: "invalidURL"
        }
        chai.request(app)
            .post('/shorten')
            .send(body)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
    });


    it('URL Redirect Check 1 - Invalid Redirection URL', (done) => {
   
        chai.request(app)
            .get('/K3Du70sd')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });


});