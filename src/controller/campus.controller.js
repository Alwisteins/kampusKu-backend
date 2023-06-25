import catchAsync from "../utils/catchAsync";
import campusModel from "../model";

export const getAllCampus = catchAsync(async (req, res) => {
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getAllCampus();

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
      reason,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

export const getCampusById = catchAsync(async (req, res) => {
  const { id } = req.query;
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusById(id);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
      reason,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

export const getCampusByName = catchAsync(async (req, res) => {
  const { name } = req.query;

  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusByName(name);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
      reason,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

export const getCampusByRank = catchAsync(async (req, res) => {
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusByRank();

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
      reason,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});

export const getCampusByFilter = catchAsync(async (req, res) => {
  const {
    type, province, faculty, accreditation,
  } = req.query;

  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusByFilter(type, province, faculty, accreditation);

  // 2) validate if status variabel value false
  if (status === false) {
    return res.status(statusCode).json({
      status,
      message,
      reason,
    });
  }

  // 3) response if success
  return res.status(statusCode).json({
    status,
    message,
    kampus,
  });
});
