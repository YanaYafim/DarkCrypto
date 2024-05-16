import chai from 'chai';
import chaiHttp from 'chai-http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module'; 

chai.use(chaiHttp);
const { expect } = chai;

// Import server dynamically
const require = createRequire(import.meta.url); 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = await import(`${__dirname}/../app.js`).then(module => module.default); 

describe('User Registration', () => {
  const validUser = {
    username: 'testuser',
    email: 'test@example.com',
    password: 'Password123!'
  };

  it('should register a user with valid data', async () => {
    const res = await chai.request(server).post('/register').send(validUser); 
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('message', 'User registered successfully!');
  });

  it('should not register a user with an invalid email', async () => {
    const invalidUser = { ...validUser, email: 'invalid-email' };
    const res = await chai.request(server).post('/register').send(invalidUser); 
    expect(res).to.have.status(400);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('message', 'Invalid email format!');
  });
});
