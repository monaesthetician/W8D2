const express = require('express');
const blogController = require('../controller/blogController')

const router = express.Router();

        router.get('/', blogController.blog_index);

        router.post('/', blogController.blog.creat_post);

        router.get('/create', blogContraller.blog_create_get);
            
        router.get('/:id', blogController.blog_details);
          
        router.delete('/:id', blogController.blog_delelte);
          
        

        

 module.exports = router;

