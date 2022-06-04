const request = require('supertest')
const app = require('./app');


describe('User API', () => {
    it('GET /api/users/id --> specific user by ID', () => {
        return request(app)
            .get('/api/users/7')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        firstName: expect.any(String),
                        lastName: expect.any(String),
                        email: expect.any(String),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })
                );
            });
    });
    it('GET /api/user-listings/id --> get listings of specific user', () => {
        return request(app)
            .get('/api/user-listings/7')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            brand: expect.any(String),
                            colorway: expect.any(String),
                            location: expect.any(String),
                            releaseDate: expect.any(String),
                            size: expect.any(Number),
                            rate: expect.any(Number),
                            description: expect.any(String),
                            listedBy: expect.any(Number),
                            rentedBy: null,
                            imageURL: expect.any(String),
                            rented: expect.any(Boolean),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String)
                        })
                    ])
                );
            });
    });
});

describe('Sneaker API', () => {
    it('GET /api/sneakers --> array of sneakers', () => {
        return request(app)
            .get('/api/sneakers')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            brand: expect.any(String),
                            colorway: expect.any(String),
                            location: expect.any(String),
                            releaseDate: expect.any(String),
                            size: expect.any(Number),
                            rate: expect.any(Number),
                            description: expect.any(String),
                            listedBy: expect.any(Number),
                            rentedBy: null,
                            imageURL: expect.any(String),
                            rented: expect.any(Boolean),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String)
                        })
                    ])
                );
            });
    });

    it('GET /api/sneakers/id --> specific sneaker by ID', () => {
        return request(app)
            .get('/api/sneakers/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        brand: expect.any(String),
                        colorway: expect.any(String),
                        location: expect.any(String),
                        releaseDate: expect.any(String),
                        size: expect.any(Number),
                        rate: expect.any(Number),
                        description: expect.any(String),
                        listedBy: expect.any(Number),
                        rentedBy: null,
                        imageURL: expect.any(String),
                        rented: expect.any(Boolean),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String)
                    })
                );
            });
    });
})