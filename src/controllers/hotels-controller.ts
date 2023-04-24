import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import hotelsService from '@/services/hotels-service';

export async function getHotels(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const idUser = Number(userId);
  try {
    const hotels = await hotelsService.getHotelsList(idUser);
    return res.status(httpStatus.OK).send(hotels);
  } catch (e) {
    next(e);
  }
}

export async function getHotelRooms(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { hotelId }: Record<string, string> = req.params;
  const idHotelRoom = Number(hotelId);

  const { userId } = req;
  const idUser = Number(userId);
  try {
    const hotelRooms = await hotelsService.getHotelRoomsList(idHotelRoom, idUser);
    return res.status(httpStatus.OK).send(hotelRooms);
  } catch (e) {
    next(e);
  }
}
