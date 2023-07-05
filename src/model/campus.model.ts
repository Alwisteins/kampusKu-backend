import catchAsync from "../utils/catchAsync";
import pool from "../config/connect";

interface Response {
  statusCode: number;
  status: boolean;
  message: string;
  kampus?: any[];
  reason?: any;
}

type Model = (...args: any[]) => Promise<Response>;

export const getAllCampus: Model = catchAsync(async () => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query("SELECT * FROM kampus");
    // 2) return if success
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    } as Response;
  } catch (err: any) {
    // 3) return if error
    return {
      statusCode: 500,
      status: false,
      message: "Oops, terjadi kesalahan",
      reason: err,
    } as Response;
  }
});

export const getCampusById: Model = catchAsync(async (id: number) => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query(`SELECT * FROM kampus WHERE id=${id}`);
    // 2) return if success
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    } as Response;
  } catch (err: any) {
    // 3) return if error
    return {
      statusCode: 500,
      status: false,
      message: "Oops, terjadi kesalahan",
      reason: err,
    } as Response;
  }
});

export const getCampusByName: Model = catchAsync(async (name: string) => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query(
      `SELECT * FROM kampus WHERE name LIKE '%${name}%'`
    );
    // 2) return if success
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    } as Response;
  } catch (err: any) {
    // 3) return if error
    return {
      statusCode: 500,
      status: false,
      message: "Oops, terjadi kesalahan",
      reason: err,
    } as Response;
  }
});

export const getCampusByRank: Model = catchAsync(async () => {
  try {
    // 1) find data kampus from tabel
    const [rows] = await pool.query("SELECT * FROM kampus ORDER BY rank ASC");
    // 2) return if success
    return {
      statusCode: 200,
      status: true,
      message: "kampus ditemukan",
      kampus: rows,
    } as Response;
  } catch (err: any) {
    // 3) return if error
    return {
      statusCode: 500,
      status: false,
      message: "Opps, terjadi kesalahan",
      reason: err,
    } as Response;
  }
});

type ReqObject = {
  type?: string;
  province?: string;
  faculty?: string;
  accreditation?: string;
};

export const getCampusByFilter: Model = catchAsync(
  async (reqObject: ReqObject): Promise<Response> => {
    let query: string = "SELECT * FROM kampus WHERE";
    const conditions: string[] = [];
    const params: string[] = [];

    // validator
    if (reqObject.type) {
      conditions.push("tipe = ?");
      params.push(reqObject.type);
    }
    if (reqObject.province) {
      conditions.push("provinsi = ?");
      params.push(reqObject.province);
    }
    if (reqObject.faculty) {
      conditions.push("fakultas = ?");
      params.push(reqObject.faculty);
    }
    if (reqObject.accreditation) {
      conditions.push("akreditasi = ?");
      params.push(reqObject.accreditation);
    }

    query += ` ${conditions.join(" OR ")}`;

    try {
      // 1) find data kampus from tabel
      const [rows] = await pool.query(query, params);
      // 2) return if success
      return {
        statusCode: 200,
        status: true,
        message: "kampus ditemukan",
        kampus: rows,
      } as Response;
    } catch (err: any) {
      // 3) return if error
      return {
        statusCode: 500,
        status: false,
        message: "Opps, terjadi kesalahan",
        reason: err,
      } as Response;
    }
  }
);

export const getProvince = catchAsync(async () => {
  try {
    // 1) find data provinsi from tabel
    const [rows] = await pool.query("SELECT provinsi FROM kampus");
    // 2) return if success
    return {
      statusCode: 200,
      status: true,
      message: "provinsi ditemukan",
      provinsi: rows,
    } as Response;
  } catch (err) {
    // 3) return if error
    return {
      statusCode: 500,
      status: false,
      message: "Opps, terjadi kesalahan",
      reason: err,
    } as Response;
  }
});
