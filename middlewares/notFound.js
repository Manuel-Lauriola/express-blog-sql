//definisco il middleware 
const notFound = (req, res, next) => {
  res.status(404).json('Pagina non trovata')
}

module.exports = notFound