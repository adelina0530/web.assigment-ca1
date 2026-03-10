"use strict";

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";

const details = {

  createView(request, response) {

    logger.info("Category details loading");

    const category = movieStore.getCategory(request.params.id);

    const viewData = {
      title: category.title,
      category: category
    };

    response.render("details", viewData);
  }

};

export default details;