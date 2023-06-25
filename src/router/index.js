import { Router } from "express";
import campusRoutes from "./campus.router";

/**
 * Initial all routes for apis.
 */
const rootRoutes = Router();
rootRoutes.use('/campus', campusRoutes);

/**
 * Add configuration for serve into server.
 */
const apiRoutes = Router();
apiRoutes.use("/api/v1", rootRoutes)

export default apiRoutes;
