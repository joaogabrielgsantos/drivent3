import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';

async function getHotelsList() {
  const hotels = await hotelRepository.findHotels();
  if (!hotels) throw notFoundError();

  return hotels;
}

const hotelsService = { getHotelsList };

export default hotelsService;
