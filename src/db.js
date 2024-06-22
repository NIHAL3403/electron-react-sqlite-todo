const { app } = require('electron');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

let db;

function initDatabase() {
    const dbPath = path.join(app.getPath('userData'), 'database.db');
    db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Failed to open database', err.message);
        } else {
            console.log('Connected to database');
            createTable();
        }
    });

    return db;
}

function createTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL,
            completed INTEGER DEFAULT 0
        )
    `;

    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table created successfully');
        }
    });
}

function query(queryString) {
    return new Promise((resolve, reject) => {
        db.all(queryString, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = {
    initDatabase,
    query
};
