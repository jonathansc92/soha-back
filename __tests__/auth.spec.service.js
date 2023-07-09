require('dotenv').config();

const request = require('supertest');
const app = require('../src/app');

describe('Login', () => {
  it('Login na rota /api/auth/login', async () => {
    const res = await request(app).post('/api/auth/login')
      .send({
        email: "soha@soha.com",
        password: "soha123",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it('Logout na rota /api/auth/logout', async () => {
    const login = await request(app).post('/api/auth/login')
      .send({
        email: "soha@soha.com",
        password: "soha123",
      });

    const res = await request(app)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${login.body.token}`);

    expect(res.statusCode).toBe(200);
  });
});