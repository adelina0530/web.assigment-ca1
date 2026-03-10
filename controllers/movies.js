"use strict";

import logger from "../utils/logger.js";

const movies = {
  createView(request, response) {
    logger.info("Movie Collection page loading");
    response.render("movies");
  },
};


export default movies;