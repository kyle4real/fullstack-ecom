import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

import "colors";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
