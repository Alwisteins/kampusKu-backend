import catchAsync from "../utils/catchAsync";
import kampusService from "../service/kampus.service";

const getAllCampus = catchAsync(async (req, res) => {
  // 1) catch all return from kampusService into variabel
  const {
    statusCode, status, message, kampus,
  } = await kampusService.getAllCampus();

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
  } = await kampusService.getCampusById(id);

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
  } = await kampusService.getCampusById(name);

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

const kampusController = {
  getAllCampus,
  getCampusById,
  getCampusByName,
};

export default kampusController;
