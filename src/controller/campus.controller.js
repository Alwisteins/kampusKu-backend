import catchAsync from "../utils/catchAsync";
import campusModel from "../model/campus.model";

const getAllCampus = catchAsync(async (req, res) => {
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getAllCampus();

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const getCampusById = catchAsync(async (req, res) => {
  const { id } = req.params;
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getCampusById(id);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const getCampusByName = catchAsync(async (req, res) => {
  const { name } = req.body;

  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getCampusById(name);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const getCampusByType = catchAsync(async (req, res) => {
  const { tipe } = req.body;

  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getCampusByType(tipe);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const getCampusByRank = catchAsync(async (req, res) => {
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getCampusByRank();

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const getCampusByFaculty = catchAsync(async (req, res) => {
  const { fakultas } = req.body;
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getCampusByFaculty(fakultas);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const getCampusByAccreditation = catchAsync(async (req, res) => {
  const { akreditasi } = req.body;
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await campusModel.getCampusByAccreditation(akreditasi);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

const campusController = {
  getAllCampus,
  getCampusById,
  getCampusByName,
  getCampusByType,
  getCampusByRank,
  getCampusByFaculty,
  getCampusByAccreditation,
};

export default campusController;
