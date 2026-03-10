import fs from "fs";

'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';


const movieStore = {

  store: new JsonStore('./models/movie-store.json', { categoryCollection :[]}),
  collection: 'categoryCollection',
  array: 'movies',
  getCategory(id) {
    return this.store.findOneBy(this.collection, (movie => movie.id === id));
},


  getAllCategories() {
    return this.store.findAll(this.collection);
  },

};

export default movieStore;