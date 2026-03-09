'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// add your own routes below

import start from './controllers/start.js';
router.get('/', start.createView);

import movies from "./controllers/movies.js";
router.get("/movies", movies.createView);

export default router;
