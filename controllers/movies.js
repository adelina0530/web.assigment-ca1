"use strict";

import logger from "../utils/logger.js";
import moviesStore from "../models/movie-store.js";

const movies = {
  createView(request, response) {
    logger.info("Movie Collection page loading");
    const viewData = {
movies: moviesStore.getAllCategories()
};

response.render("movies", viewData);

  },
};
export default movies;


