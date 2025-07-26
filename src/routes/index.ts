import { Router } from 'express';
import emailRouter from './email.routes';

const mainRouter = Router();

/**
 * Main application router.
 * Aggregates all feature-specific routers and applies a common prefix.
 * Currently, all routes are prefixed with `/api/v1`.
 */
mainRouter.use('/email', emailRouter);

export default mainRouter;
