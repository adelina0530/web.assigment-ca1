"use strict";

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";

const details = {

  createView(request, response) {

    logger.info("Category details loading");

    const categoryId = request.params.id;
    

    const viewData = {
      title: "Movies",
      category: movieStore.getCategory(categoryId)
    }

    response.render("details", viewData);
  }

};

export default details;