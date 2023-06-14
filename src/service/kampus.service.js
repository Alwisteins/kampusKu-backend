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

const kampusService = {
  getAllCampus,
  getCampusById,
  getCampusByName,
};

export default kampusService;
