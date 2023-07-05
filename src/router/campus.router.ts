import { Router } from "express";
import { campusController } from "../controller";

const campusRoutes: Router = Router();

// Rute untuk properti getAllCampus
campusRoutes.get("/", campusController.getAllCampus);

// Rute untuk properti getCampusByRank
campusRoutes.get("/rank", campusController.getCampusByRank);

// Rute untuk properti getCampusByName
campusRoutes.get("/search", campusController.getCampusByName);

// Rute untuk properti getCampusById
campusRoutes.get("/detail", campusController.getCampusById);

// Rute untuk filter pada path 'campus/filter'
campusRoutes.get("/filter", campusController.getCampusByFilter);

export default campusRoutes;
