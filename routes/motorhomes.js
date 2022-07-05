import express from 'express';
import path from 'path';
import multer from 'multer';

import {
  createMotorhome,
  getMotorhomes,
  getMotorhome,
} from '../controllers/motorhomes.js';

const storage = multer.diskStorage({
  destination: './assets',
  filename: (_, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', getMotorhomes);
router.post('/', upload.single('motorhomeImage'), createMotorhome);
router.get('/:id', getMotorhome);

export default router;
