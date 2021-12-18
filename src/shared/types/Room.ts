import { AddressType } from './Address';
import { User } from './User';

export type RoomType = {
  id: number,
  address: AddressType,
  business_model: string,
  name: string,
  description: string,
  cover_image: string,
  host_id: number,
  host: User,
  images: {
    id: number,
    url: string,
  }[],
  room_information: {
    futon: string,
    sofa_bed: string,
    double_bed: number,
    single_bed: string,
    total_of_bed: number,
    king_size_bed: string,
    queen_size_bed: string,
    share_bathroom: string,
    private_bathroom: string,
    total_of_bedroom: number,
    total_of_bathroom: number,
    super_king_size_bed: string,
  },
  amenities: number[],
  price: {
    max_guest: number,
    weekday: number,
    weekend: number,
  },
}
