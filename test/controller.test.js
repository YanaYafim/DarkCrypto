const request = require('supertest');
const app = require('../app');

describe('Controller tests', () => {
  it('should sign up a new user', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        userName: 'TestUser',
        email: 'test@example.com',
        password: 'TestPassword123'
      });
    expect(res.statusCode).toEqual(201);
  });

  it('shouldn`t sign up a new user with the same email', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        userName: 'TestUser2',
        email: 'test@example.com',
        password: 'TestPassword123'
      });
    expect(res.statusCode).toEqual(400);
  });

  it('shouldn`t sign up a new user with the strange email', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        userName: 'TestUser2',
        email: 'te,sR@eRample.com',
        password: 'TestPassword123'
      });
    expect(res.statusCode).toEqual(400);
  });

  it('shouldn`t sign up a new user with the short password', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        userName: 'TestUser2',
        email: 'testmail@example.com',
        password: '12345'
      });
    expect(res.statusCode).toEqual(400);
  });

  it('should log in an existing user', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'TestPassword123'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should log in with not correct password', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'TestPassword12'
      });
    expect(res.statusCode).toEqual(400);
  });

  it('should update user profile', async () => {
    const res = await request(app)
      .put('/edit/update')
      .send({
        username: 'UpdatedName',
        email: 'update@example.com',
        newPassword: 'newSecurePassword123'
      });
    expect(res.statusCode).toEqual(302);
  });

  it('should delete the user account', async () => {
    const res = await request(app)
      .delete('/profile-delete');
    expect(res.statusCode).toEqual(302);
  });

  it('should log out the user', async () => {
    const res = await request(app)
      .get('/logout');
    expect(res.statusCode).toEqual(302);
  });

  it('should convert coins successfully', async () => {
    const conversionData = {
      valueTo: 10,
      valueFrom: 5,
      coinTo: 'Bitcoin',
      coinFrom: 'Ethereum'
    };

    const res = await request(app)
      .put('/wallet/convert/conversion')
      .send(conversionData);
    expect(res.statusCode).toEqual(302);
  });
});
