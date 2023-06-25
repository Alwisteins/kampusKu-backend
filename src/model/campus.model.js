import catchAsync from "../utils/catchAsync";
import pool from "../config/connect";

export const getAllCampus = catchAsync(async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM kampus");
    if (rows.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: "kampus tidak ditemukan",
      };
    }
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    };
  } catch (err) {
    return {
      statusCode: 500,
      status: false,
      message: "Oops, terjadi kesalahan",
      reason: err,
    };
  }
});

export const getCampusById = catchAsync(async (id) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM kampus WHERE id=${id}`);
    if (rows.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: `kampus dengan id ${id} tidak ditemukan`,
      };
    }
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    };
  } catch (err) {
    return {
      statusCode: 500,
      status: false,
      message: "Oops, terjadi kesalahan",
      reason: err,
    };
  }
});

export const getCampusByName = catchAsync(async (name) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM kampus WHERE name LIKE %${name}%`,
    );
    if (!rows.length) {
      return {
        statusCode: 404,
        status: false,
        message: `kampus dengan nama ${name} tidak ditemukan`,
      };
    }
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    };
  } catch (err) {
    return {
      statusCode: 500,
      status: false,
      message: "Oops, terjadi kesalahan",
      reason: err,
    };
  }
});

export const getCampusByRank = catchAsync(async () => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query("SELECT * FROM kampus ORDER BY rank ASC");
    // 2) return if data null
    if (rows.length < 1) {
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
      kampus: rows,
    };
  } catch (err) {
    // 4) return if error
    return {
      statusCode: 500,
      status: false,
      message: "Opps, terjadi kesalahan",
      reason: err,
    };
  }
});

export const getCampusByFilter = catchAsync(
  async (type, province, faculty, accreditation) => {
    let query = "SELECT * FROM kampus WHERE";
    const conditions = [];
    const params = [];

    // validator
    if (type) {
      conditions.push("tipe = ?");
      params.push(type);
    }
    if (province) {
      conditions.push("provinsi = ?");
      params.push(province);
    }
    if (faculty) {
      conditions.push("fakultas = ?");
      params.push(faculty);
    }
    if (accreditation) {
      conditions.push("akreditasi = ?");
      params.push(accreditation);
    }

    query += ` ${conditions.join(" OR ")}`;

    try {
      // 1) find data kampus from tabel
      const [rows] = await pool.query(query, params);
      // 2) return if data null
      if (rows.length < 1) {
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
        kampus: rows,
      };
    } catch (err) {
      // 4) return if error
      return {
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      };
    }
  },
);
