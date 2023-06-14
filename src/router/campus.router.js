import { Router } from "express";
import campusController from "../controller/campus.controller";

const routes = Router();

// Rute untuk properti getAllCampus
routes.get("/campus", campusController.getAllCampus);

// Rute untuk properti getCampusByRank
routes.get("/campus/rank", campusController.getCampusByRank);

// Rute untuk properti getCampusByName
routes.get("/campus/:name", campusController.getCampusByName);

// Rute untuk properti getCampusByTipe
// routes.get("/campus/filter/:type", campusController.getCampusByType); wrong path

// Rute untuk properti getCampusByFakultas
// routes.get("/campus/filter/:faculty", campusController.getCampusByFaculty); wrong path

// Rute untuk properti getCampusByAkreditasi
/*
routes.get(
  "/campus/filter/:accreditation",
  campusController.getCampusByAccreditation
); wrong path
*/

// Rute untuk properti getCampusById
routes.get("/campus/filter/:id", campusController.getCampusById);
