const express = require('express');

// NOTE TEXT -> MONGOOSE CONFIG (.env)
const dotenv = require('dotenv');
dotenv.config();

require('./db/connect');

/* --- services/express.js --- */ 
require('./services/express')