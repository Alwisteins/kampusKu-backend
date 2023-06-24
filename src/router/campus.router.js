import { Router } from "express";
import { campusController } from "../controller";

const routes = Router();

// Rute untuk properti getAllCampus
routes.get("/campus", campusController.getAllCampus);

// Rute untuk properti getCampusByRank
routes.get("/campus/rank", campusController.getCampusByRank);

// Rute untuk properti getCampusByName
routes.get("/campus/:name", campusController.getCampusByName);

// Rute untuk filter pada path '/campus/filter'
routes.get("/campus/filter", (req, res) => {
  const filters = req.body; // Mengambil query parameters dari permintaan

  // Mengecek setiap filter yang dipilih dan memanggil controller yang sesuai
  if (filters.type) {
    campusController.getCampusByType(req, res);
  } else if (filters.location) {
    campusController.getCampusByLocation(req, res);
  } else if (filters.faculty) {
    campusController.getCampusByFaculty(req, res);
  } else if (filters.accreditation) {
    campusController.getCampusByAccreditation(req, res);
  } else {
    res
      .status(400)
      .json({ status: false, message: "No valid filter provided" });
  }
});

// Rute untuk properti getCampusById
routes.get("/campus/detail/:id", campusController.getCampusById);

export default routes;
