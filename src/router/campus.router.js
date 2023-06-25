import { Router } from "express";
import { campusController } from "../controller";

const campusRoutes = Router();

// Rute untuk properti getAllCampus
campusRoutes.get("/", campusController.getAllCampus);

// Rute untuk properti getCampusByRank
campusRoutes.get("/rank", campusController.getCampusByRank);

// Rute untuk properti getCampusByName
campusRoutes.get("/:name", campusController.getCampusByName);

// Rute untuk filter pada path 'campus/filter'
campusRoutes.get("/filter", (req, res) => {
  const filters = req.params; // Mengambil query parameters dari permintaan

  // Mengecek setiap filter yang dipilih dan memanggil controller yang sesuai
  if (filters.type) {
    campusController.getCampusByType(req, res);
  } else if (filters.provinsi) {
    campusController.getCampusByProvince(req, res);
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
campusRoutes.get("/detail/:id", campusController.getCampusById);

export default campusRoutes;
