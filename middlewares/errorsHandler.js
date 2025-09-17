const errorsHandler = (err, req, res, next) => {
  res.status(500).json('Errore del server')
}

module.exports = errorsHandler