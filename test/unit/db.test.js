const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

// Mock electron's app module
const mockApp = {
    getPath: sinon.stub().returns('/tmp')
};

const { initDatabase, query } = proxyquire('../../src/db', {
    electron: { app: mockApp }
});

describe('Database tests', () => {
    let db;

    before((done) => {
        db = initDatabase();
        db.serialize(() => {
            db.run(`
                CREATE TABLE IF NOT EXISTS todos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    task TEXT NOT NULL,
                    completed INTEGER DEFAULT 0
                )
            `, (err) => {
                if (err) {
                    done(err);
                } else {
                    db.run(`
                        INSERT INTO todos (task, completed) VALUES
                        ('Sample Task 1', 0),
                        ('Sample Task 2', 1)
                    `, done);
                }
            });
        });
    });

    after(() => {
        if (db) {
            db.close((err) => {
                if (err) {
                    console.error('Error closing database', err.message);
                } else {
                    console.log('Database connection closed');
                }
            });
        }
    });

    it('should retrieve todos from database', async () => {
        const todos = await query('SELECT * FROM todos');
        expect(todos).to.be.an('array');
        expect(todos.length).to.be.at.least(1);
    });

    // Add more tests as needed
});
