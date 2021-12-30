import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../Auth/AuthContext';
import useForm from '../shared/hooks/form';
import useApi from '../shared/hooks/api';
import { color } from '../shared/utils/styles';
import { RoomType } from '../shared/types/Room';
import Input from '../shared/components/Input';
import Button from '../shared/components/Button';

type Props = { roomData: RoomType };

export default function Booking({ roomData }: Props) {
  const [dateQuantity, setDateQuantity] = useState(1);
  const { user } = useAuthContext();
  const [postResult, postRequest] = useApi.post('/reservation');

  const onSubmit = async (formValues: any) => {
    const bookingData = {
      ...formValues,
      hostId: roomData.host_id,
      roomId: roomData.id,
      roomName: roomData.name,
      roomAddress: roomData.address.detail,
    };
    const response = await postRequest(bookingData);
    alert(JSON.stringify(response));
  }
  const formHandle = useForm(onSubmit);
  const { values, handleChange, handleSubmit, errors } = formHandle;
  const price = roomData.price.weekday;
  
  useEffect(() => {
    if (values.dateFrom && values.dateTo) {
      const to: any = new Date(values.dateTo);
      const from: any = new Date(values.dateFrom);
      const date = (to - from) / (24 * 3600 * 1000);
      setDateQuantity(date);
    }
  }, [values.dateFrom, values.dateTo]);

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate>
        <h2>{price} <span style={{ fontSize: '1rem' }}>/ 1 đêm</span></h2>

        <InputContainer>
          <DateInput type="date" name="dateFrom" onChange={handleChange} />
          <span>-</span>
          <DateInput type="date" name="dateTo" onChange={handleChange} />
        </InputContainer>

        <TextPrice>
          <span>{`Giá thuê ${dateQuantity} đêm`}</span>
          <span>{price * dateQuantity}</span>
        </TextPrice>
        <TextPrice>
          <span>Phí dịch vụ</span>
          <span>{price * 0.1}</span>
        </TextPrice>
        <hr />
        <TextPrice>
          <b>Tổng tiển</b>
          <b>{price * dateQuantity + price * 0.1}</b>
        </TextPrice>

        <Input
          name='clientName'
          placeholder={user?.name || 'Your name'}
          handleChange={handleChange}
          error={errors.userName}
        />
        <Input
          name='clientPhone'
          placeholder={user?.phone || 'Phone number'}
          handleChange={handleChange}
          error={errors.clientPhone}
        />
        <SubmitButton type='submit'>
          Book now
        </SubmitButton>
      </form>
    </Container>
  )
}

const Container = styled.section`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1.5rem;
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid ${color.borderLightest};
  border-radius: 5px;
  color: ${color.textDarkest};
  outline: none;
`
const DateInput = styled.input`
  margin: 0 0.5rem;
  width: 130px;
  border: none;
  outline: none;
`
const TextPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0.5rem;
`
const SubmitButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
`