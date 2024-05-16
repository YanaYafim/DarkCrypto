import chai from 'chai';
import chaiHttp from 'chai-http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

chai.use(chaiHttp);
const { expect } = chai;

// Import server dynamically
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const serverModule = await import(`${__dirname}/../app.js`);
const server = serverModule.default;

describe('User Login', () => {
  const userCredentials = {
    email: 'test@example.com',
    password: 'Password123!'
  };

  it('should login a user with valid credentials', async () => {
    const res = await chai.request(server).post('/login').send(userCredentials);
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('token');
  });

  it('should not login a user with wrong password', async () => {
    const wrongUserCredentials = { ...userCredentials, password: 'WrongPassword' };
    const res = await chai.request(server).post('/login').send(wrongUserCredentials);
    expect(res).to.have.status(401);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('message', 'Incorrect password!');
  });
});