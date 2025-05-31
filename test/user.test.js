const request = require('supertest');
const app = require('../src/app');

describe('User API', () => {
    //Primera prueba
    test('GET /api/users should return an empty list initially', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    test('POST /api/users should create a new user', async () => {
        const newUser = {
            name: 'Allan Panchi',
            email: 'allanpanchi@gmail.com'
            }

        const response = await request(app)
            .post('/api/users')
            .send(newUser);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Allan Panchi');
    });

    test('GET /api/users should return the created user', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].name).toBe('Allan Panchi');
    });

    test('POST /api/users should return 400 if name or email is missing', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ name: 'Incomplete User' });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message', 'Name and email are required.');
    });
});