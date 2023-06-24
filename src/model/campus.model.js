import catchAsync from "../utils/catchAsync";
import pool from "../config/connect";

export const getAllCampus = catchAsync(async () => {
  // 1) find data kampus from tabel
  await pool
    .query("SELECT * FROM kampus")
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: "kampus tidak ditemukan",
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
});

export const getCampusById = catchAsync(async (id) => {
  // 1) find data kampus from tabel
  await pool
    .query(`SELECT * FROM tabel WHERE id=${id}`)
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan id ${id} tidak ditemukan`,
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
});

export const getCampusByName = catchAsync(async (name) => {
  // 1) find data kampus from tabel
  await pool
    .query(`SELECT * FROM tabel WHERE name LIKE '%${name}%'`)
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan nama ${name} tidak ditemukan`,
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
});

export const getCampusByType = async (tipe) => {
  // 1) find data kampus from tabel
  await pool
    .query(`SELECT * FROM tabel WHERE tipe=${tipe}`)
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan tipe ${tipe} tidak ditemukan`,
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
};

export const getCampusByRank = catchAsync(async () => {
  // 1) find data kampus from tabel
  await pool
    .query("SELECT * FROM tabel ORDER BY rank ASC")
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: "kampus tidak ditemukan",
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
});

export const getCampusByFaculty = catchAsync(async (fakultas) => {
  // 1) find data kampus from tabel
  await pool
    .query(`SELECT * FROM tabel WHERE fakultas=${fakultas}`)
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan fakultas ${fakultas} tidak ditemukan`,
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
});

export const getCampusByAccreditation = catchAsync(async (akreditasi) => {
  // 1) find data kampus from tabel
  await pool
    .query(`SELECT * FROM tabel WHERE akreditasi=${akreditasi}`)
    .then((result) => {
      // 2) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan akreditasi ${akreditasi} tidak ditemukan`,
        };
      }
      // 3) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    })
    .catch((err) =>
      // 4) return if error
      ({
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      }));
});
