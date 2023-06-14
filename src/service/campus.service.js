import catchAsync from "../utils/catchAsync";
import Kampus from "../model/kampus.model";

const getAllCampus = catchAsync(async () => {
  // 1) find data kampus from collection
  const kampus = await Kampus.find();

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: "kampus tidak ditemukan",
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: "kampus ditemukan",
    kampus,
  };
});

const getCampusById = catchAsync(async (kampusId) => {
  // 1) find data kampus from collection
  const kampus = await Kampus.findOne(kampusId);

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: `kampus dengan id ${kampusId} tidak ditemukan`,
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: `kampus dengan id ${kampusId} ditemukan`,
    kampus,
  };
});

const getCampusByName = catchAsync(async (name) => {
  // 1) find data kampus from collection
  const filter = {
    name: { $regex: name, $options: "i" },
  };
  const kampus = await Kampus.findOne(filter);

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: `kampus dengan nama ${name} tidak ditemukan`,
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: `kampus dengan nama ${name} ditemukan`,
    kampus,
  };
});

const getCampusByType = catchAsync(async (tipe) => {
  // 1) find data kampus from collection
  const kampus = await Kampus.find(tipe);

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: `kampus dengan tipe ${tipe} tidak ditemukan`,
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: `kampus dengan tipe ${tipe} ditemukan`,
    kampus,
  };
});

const getCampusByRank = catchAsync(async () => {
  // 1) find data kampus from collection
  const kampus = await Kampus.find().sort({ rank: 1 });

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: "kampus tidak ditemukan",
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: "kampus ditemukan",
    kampus,
  };
});

const getCampusByFaculty = catchAsync(async (fakultas) => {
  // 1) find data kampus from collection
  const kampus = await Kampus.find(fakultas);

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: `kampus dengan fakultas ${fakultas} tidak ditemukan`,
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: `kampus dengan fakultas ${fakultas} ditemukan`,
    kampus,
  };
});

const getCampusByAccreditation = catchAsync(async (akreditasi) => {
  // 1) find data kampus from collection
  const kampus = await Kampus.find(akreditasi);

  // 2) validate & return if data not exist
  if (kampus == null) {
    return {
      statusCode: 404,
      status: false,
      message: `kampus dengan akreditasi ${akreditasi} tidak ditemukan`,
    };
  }

  // 3) return if data exist
  return {
    statusCode: 200,
    status: true,
    message: `kampus dengan akreditasi ${akreditasi} ditemukan`,
    kampus,
  };
});

const campusService = {
  getAllCampus,
  getCampusById,
  getCampusByName,
  getCampusByType,
  getCampusByRank,
  getCampusByFaculty,
  getCampusByAccreditation,
};

export default campusService;
