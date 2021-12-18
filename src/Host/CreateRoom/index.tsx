import styled from 'styled-components';
import useForm from '../../shared/hooks/form';
import useApi from '../../shared/hooks/api';

import OuterInput from '../../shared/components/OuterInput';
import OuterTextarea from '../../shared/components/OuterTextarea';
import Heading from './Heading';
import Price from './Price';
import Address from './Address';
import Thumbnail from './Thumbnail';
import Amenities from './Amenities';

export default function CreateRoom() {
  const { data, apiPost } = useApi.post('/rooms');
  const onSubmit = (formValues: any) => {
    apiPost(formValues);
    //alert(JSON.stringify(formValues));
  }
  const { handleSubmit, handleChange } = useForm(onSubmit);
  if (data) {
    return <div>Submited: {JSON.stringify(data)}</div>
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Heading />
      <Name
        name='name'
        label='Name (required)'
        handleChange={handleChange}
      />
      <Description
        name='description'
        label='Description'
        handleChange={handleChange}
      />
      <Thumbnail />
      <Price handleChange={handleChange} />
      <Address handleChange={handleChange} />
      <Amenities handleChange={handleChange} />
    </form>
  )
}

const Name = styled(OuterInput)`
  margin-top: 1rem;
`
const Description = styled(OuterTextarea)`
  margin-top: 1rem;
`