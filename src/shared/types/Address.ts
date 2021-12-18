export type AddressType = {
  detail: string,
  location_lat: string,
  location_long: string,
  province_id: number,
  district_id: number,
  ward_id: number,
  province: {
    id: number,
    name: string,
  },
  district: {
    id: number,
    name: string,
    province_id: number,
  },
  ward: {
    id: number,
    name: string,
    district_id: number,
  },
}