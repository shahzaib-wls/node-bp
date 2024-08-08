import testRoutes from './test.js';
import { Router } from 'express';
const router = Router();

router.use('/test', testRoutes);

export default router;