import { Router } from "express";
import campusRoutes from "./campus.router";
import { campusController } from "../controller";

// Rute untuk properti getProvince
const provinceRoutes: Router = campusRoutes.get("/province", campusController.getProvince);

/**
 * Initial all routes for apis.
 */
const rootRoutes: Router = Router();
rootRoutes.use("/campus", campusRoutes);

/**
 * Add configuration for serve into server.
 */
const apiRoutes: Router = Router();
apiRoutes.use("/api/v1", rootRoutes, provinceRoutes);

export default apiRoutes;
