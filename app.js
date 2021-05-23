// const { render } = require('ejs');
const express = require('express');
// const { result } = require('lodash');
const morgan = require('morgan');
const mongoose = require('morgoose');
// const { findByIdAndDelete } = require('./models/blog');

const blogRoutes = require('./routes/blogRoutes')


// express app
const app = express();''

// connect to MONGO DB
const dbURI = 'mongodb+srv://Mona:Yentafour44@cluster0.nwi4l.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extend: true}));
app.use(morgan('dev'));


  const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
  
  
      res.render('index', { title: 'Home', blogs});
  
      
      // routes
   app.get('/', (req, res) =>{
    res.redirect('/blogs')


   app.get('/about', (req, res) => {
      res.render('about', {title: "About"});
   });
      

  // blog routes
  app.use( '/blogs', blogRoutes);

  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
  });


//   app.get('/', (req, res) => {
//     // res.send('<p>home page</p>');
//     res.sendFile('./views/index.html', {root: __dirname});
// });
// app.get('/about', (req, res) => {
//     // res.send('<p>about page</p>');\
//     res.sendFile('./views/about.html', {root: __dirname});
// });
// // redirects
// // app.get('/about-us', (req, res) => {
// //     res.redirect('/about');
// // })
// // 404 page
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// })
