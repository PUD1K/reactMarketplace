import axios, { AxiosError } from 'axios';
import React, { Component, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyToast from '../components/customElements/MyToast';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { errorsSlice } from '../store/reducers/errors/ErrorsSlice';
import { localhostAuth } from '../variables/server';

const Register = () => {
  const navigate = useNavigate();

  const { errors } = useAppSelector(state => state.errorsReducer)
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  let [successMessage, setSuccessMessage] = useState<string>('')


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(errorsSlice.actions.clearErrors());

    const userData = { email, username, password };

    if(!email || !password || !username){
      dispatch(errorsSlice.actions.addError('Отсутствует имя пользователя, email или пароль'));
      return;
    } 
    if(password !== repeatPassword){
      dispatch(errorsSlice.actions.addError('Пароли не совпадают'));
      return;
    } 
    try{
    // const response = axios.post(
    //   `${localhostAuth}/registration`, 
    //   userData
    // );
    
    // navigate('/login');
    setSuccessMessage('Вы успешно прошли регистрацию');
  } catch(e) {
    if(e instanceof AxiosError){
      const errorMessage = e.response?.data?.message
      dispatch(errorsSlice.actions.addError(errorMessage));
    }
  }
    
  };

  

    return (
      <main className="form-signin m-auto"  style={{height: 600}}>
        <div className='container h-100 d-flex align-items-center justify-content-center' >
          <form onSubmit={onSubmit} style={{width: 400}}>
            <h1 className="h3 mb-3 fw-normal">Регистрация</h1>

            <div className="form-floating">
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                className="form-control" 
                id="floatingInputE" 
                placeholder="Имя пользователя"
              />
              <label htmlFor="floatingInput">Имя пользователя</label>
            </div>
            <div className="mt-2 form-floating">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="mt-2 form-floating">
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassoword(e.target.value)} 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Пароль</label>
            </div>
            <div className="mt-2 form-floating">
              <input 
                type="password" 
                value={repeatPassword} 
                onChange={e => setRepeatPassword(e.target.value)} 
                className="form-control" 
                id="floatingPasswordRepeat" 
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Повторите пароль</label>
            </div>

            <div className="checkbox mb-3 mt-2">
              <label>
                Или <Link to='/login'>нажмите здесь</Link> для авторизации.   
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Регистрация
            </button>
          </form>
        </div>
        <>
        {errors.map(error => (
            <MyToast
                key={error}
                color="bg-danger"
                show
                text={error}
            />
          ))}
            {successMessage?
              <MyToast
                  color="bg-success"
                  show
                  text={successMessage}
              />
              :
              <></>
            }
        </>
    </main>
    )
}

export default Register
