import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import hotelsService from '@/services/hotels-service';

export async function getHotels(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const hotels = await hotelsService.getHotelsList();
    return res.status(httpStatus.OK).send(hotels);
  } catch (e) {
    next(e);
  }
}
