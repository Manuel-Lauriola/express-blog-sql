//importo l'array
const connection = require('../data/db.js')

//definisco la funzione che prenderà a carico la richiesta
//index
const index = (req, res) => {
  const sql = "SELECT * FROM posts"

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Errore durante l'esecuzione della query" + err })
    res.json(results)
  })
 }
//show
const show = (req, res) => {
   //assegno la richiesta ad una variabile
    const id = parseInt(req.params.id)
    //utilizzo find per trovare un post con l'id richiesto
    const post = posts.find(item => item.id === id);
      //se post esiste lo mostro
      if (post) {
        res.json(post);
      } //altrimenti do il messaggio di errore
        else {
            res.status(404).json({ error: "Post non trovato" });
        }
  }
  //destroy
  const destroy = (req, res) => {
    const id = parseInt(req.params.id)
    //trovo l'oggetto da eliminare
    const post = posts.find(item => item.id === id)
    //se esiste lo elimino
    if (post) {
      posts.splice(posts.indexOf(post), 1)
      res.sendStatus(204)
    }
      else {
        res.status(404).json({error: "Post non trovato"})
      }
  }
//store
  const store = (req, res) => {
   //genero l'id successivo prendendo l'id dell'ultimo elemento
   const newId = posts[posts.length -1].id +1
   //recupero i dati del post da inserire dalla richiesta
   const {title, content, image, tags} = req.body
   //creo il post
   const newPost = {
    id : newId,
    title,
    content,
    image,
    tags
   }
   //pusho il nuovo post
   posts.push(newPost)
   // Deve rispondere con lo stato 201 e il nuovo post in formato JSON
    res.status(201).json(newPost)
  }

  const update = (req, res) => {
    const id = parseInt(req.params.id)
    //recupero i dati dalla request body
    const {title, content, image, tags} = req.body
    //con find trovo il post con l'id della richiesta
    const post = posts.find(item => item.id === id)
    //verifico se il post da modificare esiste
    if (!post) {
    res.status(404).json({error: "Post non trovato"})
    return
    }
    //sostituisco i parametri del post con quelli recuperati
    post.title = title
    post.content = content
    post.image = image
    post.tags = tags
    res.json(post)
  }

  module.exports = {
    index,
    show,
    destroy,
    store,
    update
  }