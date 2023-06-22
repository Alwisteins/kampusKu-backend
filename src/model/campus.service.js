import mysql from "mysql2";
import catchAsync from "../utils/catchAsync";

const getAllCampus = catchAsync(async () => {
  // 1) find data kampus from tabel
  await mysql.query("SELECT * FROM kampus", (err, result) => {
    // 2) return if error
    if (err) {
      return {
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      };
    }
    // 3) return if data null
    if (result.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: "kampus tidak ditemukan",
      };
    }
    // 4) return if success

    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: result,
    };
  });
});

const getCampusById = catchAsync(async (id) => {
  // 1) find data kampus from tabel
  await mysql.query(`SELECT * FROM tabel WHERE id=${id}`, (err, result) => {
    // 2) return if error
    if (err) {
      return {
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      };
    }
    // 3) return if data null
    if (result.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: `kampus dengan id ${id} tidak ditemukan`,
      };
    }
    // 4) return if success

    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: result,
    };
  });
});

const getCampusByName = catchAsync(async (nama) => {
  // 1) find data kampus from tabel
  await mysql.query(
    `SELECT * FROM tabel WHERE name LIKE '%${nama}%'`,
    (err, result) => {
      // 2) return if error
      if (err) {
        return {
          statusCode: 500,
          status: false,
          message: "Opps, terjadi kesalahan",
          reason: err,
        };
      }
      // 3) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan nama ${nama} tidak ditemukan`,
        };
      }
      // 4) return if success

      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    },
  );
});

const getCampusByType = catchAsync(async (tipe) => {
  // 1) find data kampus from tabel
  await mysql.query(`SELECT * FROM tabel WHERE tipe=${tipe}`, (err, result) => {
    // 2) return if error
    if (err) {
      return {
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      };
    }
    // 3) return if data null
    if (result.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: `kampus dengan tipe ${tipe} tidak ditemukan`,
      };
    }
    // 4) return if success

    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: result,
    };
  });
});

const getCampusByRank = catchAsync(async () => {
  // 1) find data kampus from tabel
  await mysql.query("SELECT * FROM tabel ORDER BY rank ASC", (err, result) => {
    // 2) return if error
    if (err) {
      return {
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      };
    }
    // 3) return if data null
    if (result.length < 1) {
      return {
        statusCode: 404,
        status: false,
        message: "kampus tidak ditemukan",
      };
    }
    // 4) return if success

    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: result,
    };
  });
});

const getCampusByFaculty = catchAsync(async (fakultas) => {
  // 1) find data kampus from tabel
  await mysql.query(
    `SELECT * FROM tabel WHERE fakultas=${fakultas}`,
    (err, result) => {
      // 2) return if error
      if (err) {
        return {
          statusCode: 500,
          status: false,
          message: "Opps, terjadi kesalahan",
          reason: err,
        };
      }
      // 3) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan fakultas ${fakultas} tidak ditemukan`,
        };
      }
      // 4) return if success

      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    },
  );
});

const getCampusByAccreditation = catchAsync(async (akreditasi) => {
  // 1) find data kampus from tabel
  await mysql.query(
    `SELECT * FROM tabel WHERE akreditasi=${akreditasi}`,
    (err, result) => {
      // 2) return if error
      if (err) {
        return {
          statusCode: 500,
          status: false,
          message: "Opps, terjadi kesalahan",
          reason: err,
        };
      }
      // 3) return if data null
      if (result.length < 1) {
        return {
          statusCode: 404,
          status: false,
          message: `kampus dengan akreditasi ${akreditasi} tidak ditemukan`,
        };
      }
      // 4) return if success

      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: result,
      };
    },
  );
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
