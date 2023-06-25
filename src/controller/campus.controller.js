import catchAsync from "../utils/catchAsync";
import campusModel from "../model/campus.model";

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

export const getCampusByType = catchAsync(async (req, res) => {
  const { type } = req.query;

  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusByType(type);

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

export const getCampusByFaculty = catchAsync(async (req, res) => {
  const { faculty } = req.params;
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusByFaculty(faculty);

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

export const getCampusByAccreditation = catchAsync(async (req, res) => {
  const { accreditation } = req.params;
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus, reason,
  } = await campusModel.getCampusByAccreditation(accreditation);

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
