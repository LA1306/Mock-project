import { AddressType } from "../shared/types/Address"

type Props = { data: AddressType };

export default function Address({ data }: Props) {
  return (
    <div>
      <h3>Địa chỉ</h3>
      <div style={{ paddingBottom: '1rem' }}>
        {data.detail}
      </div>
      <img src="/image/map.jpg" alt="map" width='100%' />
    </div>
  )
}
