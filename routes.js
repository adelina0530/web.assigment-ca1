'use strict';

import express from "express";
import logger from "./utils/logger.js";

const router = express.Router();

import start from "./controllers/start.js";
import movies from "./controllers/movies.js";
import details from "./controllers/details.js";

router.get("/", start.createView);
router.get("/movies", movies.createView);
router.get("/details/:id", details.createView);

export default router;