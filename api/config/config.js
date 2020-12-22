

// ============================
//  Entorno de Desarrollo
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/mascoty_API';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;