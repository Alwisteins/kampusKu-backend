import catchAsync from "../utils/catchAsync";
import pool from "../config/connect";

const getAllCampus = catchAsync(async () => {
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

const getCampusById = catchAsync(async (id) => {
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

const getCampusByName = catchAsync(async (name) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM kampus WHERE name LIKE '%${name}%'`,
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

const getCampusByType = catchAsync(async (type) => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query(`SELECT * FROM kampus WHERE tipe='${type}'`);
    // 2) return if data null
    if (rows.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: `kampus dengan tipe ${type} tidak ditemukan`,
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

const getCampusByRank = catchAsync(async () => {
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

const getCampusByFaculty = catchAsync(async (fakultas) => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query(
      `SELECT * FROM kampus WHERE fakultas='${fakultas}'`,
    );
    // 2) return if data null
    if (rows.length < 1) {
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

const getCampusByAccreditation = catchAsync(async (akreditasi) => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query(
      `SELECT * FROM kampus WHERE akreditasi='${akreditasi}'`,
    );
    // 2) return if data null
    if (rows.length < 1) {
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

const campusModel = {
  getAllCampus,
  getCampusById,
  getCampusByName,
  getCampusByType,
  getCampusByRank,
  getCampusByFaculty,
  getCampusByAccreditation,
};
export default campusModel;
