/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../App/Context';
import useApi from '../shared/hooks/api';
import useForm from '../shared/hooks/form';
import { storeAuthToken } from '../shared/utils/authToken';

import validateLogin from './utils/validateLogin';
import Input from '../shared/components/Input';
import Button from '../shared/components/Button';

export default function Register() {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();  // nullable
  const { setUserData } = useAppContext();
  const [postResult, postRequest] = useApi.post('/auth/register');

  const onSubmit = async (formValues: any) => {
    const { data, error } = await postRequest(formValues);
    if (data) {
      storeAuthToken(data.token);
      setUserData(data.user);
      navigate(state || '/', { replace: true });
    }
    // console.log('> onSubmit ', postResult);  // postResult = tham chieu hay gia tri ??
  }
  const formHandle = useForm(onSubmit, validateLogin);
  const { handleChange, handleSubmit, errors } = formHandle;

  return (
    <Container>
      <div style={{ width: '100%' }}>
        <FormContainer>
          <h4 style={{ textAlign: 'center' }}>
            {pathname === '/login' ? 'Log in your account' : 'Register your account'}
          </h4>
          <form onSubmit={handleSubmit} noValidate>
            {pathname !== '/login' && (
              <Input
                name='name'
                placeholder='Your name'
                handleChange={handleChange}
                error={errors.userName}
              />
            )}
            <Input
              type='email'
              name='email'
              placeholder='Email'
              handleChange={handleChange}
              error={errors.email}
            />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              handleChange={handleChange}
              error={errors.password}
            />
            <SubmitButton type='submit'>
              {pathname === '/login' ? 'Log in' : 'Register'}
            </SubmitButton>
            <HelperText>
              {pathname === '/login'
                ? <Link to='/register'>Don't have an account? Register here</Link>
                : <Link to='/login'>Already have an account? Login here</Link>
              }
            </HelperText>
          </form>
        </FormContainer>
      </div>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const FormContainer = styled.section`
  max-width: 360px;
  margin: 0 auto 2rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem 2rem;
  @media (max-width: 600px) {
    border: none;
  }
`
const SubmitButton = styled(Button)`
  margin-top: 1rem;
  width: 100%;
`
const HelperText = styled.div`
  padding: 1rem 0;
  font-size: 0.8rem;
  text-align: center;
  color: #5e6c84;
`