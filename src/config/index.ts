import fs from 'fs';
import dotenv from "dotenv";

export default dotenv.parse(fs.readFileSync('.env'));