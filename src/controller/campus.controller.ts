import catchAsync from "../utils/catchAsync";
import campusModel from "../model";
import { Request, Response } from "express";
import { resJson } from "../../api";

type Controller = (req: Request, res: Response) => Promise<Response>;

export const getAllCampus: Controller = catchAsync(
  async (req: Request, res: Response) => {
    // 1) catch all return from kampusService into variabel
    const { statusCode, status, message, kampus, reason } =
      await campusModel.getAllCampus();

    // 2) validate if status variabel value false
    if (status === false) {
      return res.status(statusCode).json({
        status,
        message,
        reason,
      } as resJson);
    }

    // 3) response if success
    return res.status(statusCode).json({
      status,
      message,
      kampus,
    } as resJson);
  }
);

export const getCampusById: Controller = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.query;
    // 1) catch all return from kampusService into variabel
    const { statusCode, status, message, kampus, reason } =
      await campusModel.getCampusById(id);

    // 2) validate if status variabel value false
    if (status === false) {
      return res.status(statusCode).json({
        status,
        message,
        reason,
      } as resJson);
    }

    // 3) response if success
    return res.status(statusCode).json({
      status,
      message,
      kampus,
    } as resJson);
  }
);

export const getCampusByName: Controller = catchAsync(
  async (req: Request, res: Response) => {
    const { name } = req.query;

    // 1) catch all return from kampusService into variabel
    const { statusCode, status, message, kampus, reason } =
      await campusModel.getCampusByName(name);

    // 2) validate if status variabel value false
    if (status === false) {
      return res.status(statusCode).json({
        status,
        message,
        reason,
      } as resJson);
    }

    // 3) response if success
    return res.status(statusCode).json({
      status,
      message,
      kampus,
    } as resJson);
  }
);

export const getCampusByRank: Controller = catchAsync(
  async (req: Request, res: Response) => {
    // 1) catch all return from kampusService into variabel
    const { statusCode, status, message, kampus, reason } =
      await campusModel.getCampusByRank();

    // 2) validate if status variabel value false
    if (status === false) {
      return res.status(statusCode).json({
        status,
        message,
        reason,
      } as resJson);
    }

    // 3) response if success
    return res.status(statusCode).json({
      status,
      message,
      kampus,
    } as resJson);
  }
);

export const getCampusByFilter: Controller = catchAsync(
  async (req: Request, res: Response) => {
    const { type, province, faculty, accreditation } = req.query;

    // 1) catch all return from kampusService into variabel
    const { statusCode, status, message, kampus, reason } =
      await campusModel.getCampusByFilter(
        type,
        province,
        faculty,
        accreditation
      );

    // 2) validate if status variabel value false
    if (status === false) {
      return res.status(statusCode).json({
        status,
        message,
        reason,
      } as resJson);
    }

    // 3) response if success
    return res.status(statusCode).json({
      status,
      message,
      kampus,
    } as resJson);
  }
);

export const getProvince: Controller = catchAsync(
  async (req: Request, res: Response) => {

    // 1) catch all return from kampusService into variabel
    const { statusCode, status, message, provinsi, reason } =
      await campusModel.getProvince();

    // 2) validate if status variabel value false
    if (status === false) {
      return res.status(statusCode).json({
        status,
        message,
        reason,
      } as resJson);
    }

    // 3) response if success
    return res.status(statusCode).json({
      status,
      message,
      provinsi,
    } as resJson);
  }
);
