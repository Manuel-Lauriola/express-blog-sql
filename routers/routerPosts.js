//importo express
const express = require(`express`)
//assegno a router il risultato della funzione
const router = express.Router()
//importo il file posts
const posts = require(`../posts`)
//faccio restituire alle richieste l'array posts
const { index, show, store, update, destroy } = require('../controllers/controllerPosts')
// Associo ogni rotta alla sua funzione
router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);
//esporto il router
module.exports = router