import axios, { AxiosError } from 'axios';
import React, { Component, FormEvent, useState, useMemo, useEffect } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IUser } from '../models/UserInterface';
import {userSlice} from '../store/reducers/users/UserSlice'
import MyToast from '../components/customElements/MyToast';
import { errorsSlice } from '../store/reducers/errors/ErrorsSlice';
import { localhost, localhostAuth } from '../variables/server';

const Login = (): JSX.Element => {
  const { errors } = useAppSelector(state => state.errorsReducer)
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    dispatch(errorsSlice.actions.clearErrors());
    
    // check for field data issue, early return
    if (!email || !password){
      dispatch(errorsSlice.actions.addError('Отсутствует имя пользователя или пароль'));
      return;
    }

    // no field data issues, try authenticating
    try {
      const userData = { email, password };
      const response = await axios.post(
        `${localhostAuth}/login`,
        userData
      );

      const decodedToken: IUser = jwt_decode(response.data.token);
      console.log(decodedToken);
      localStorage.setItem('userData', JSON.stringify(decodedToken));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      dispatch(userSlice.actions.setLoggedIn());
      navigate('/');
    } catch(e) {
      if(e instanceof AxiosError){
        const errorMessage = e.response?.data?.message
        dispatch(errorsSlice.actions.addError(errorMessage));
      }
    }
  }

  return (
    <main className="form-signin m-auto"  style={{ height: 600 }}>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <form onSubmit={onSubmit} style={{width: 400}}>
          <h1 className="h3 mb-3 fw-normal">Авторизация</h1>

          <div className="form-floating">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Почта</label>
          </div>
          <div className="mt-2 form-floating">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>

          <div className="checkbox mt-2 mb-3">
            <label>
              Или <Link to='/registration'>нажмите сюда</Link> для регистрации
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Логин
          </button>
        </form>
      </div>
      <>
        {errors.map((error) => (
          <MyToast
            key={error}
            color="bg-danger"
            show
            text={error}
          />
        ))}
      </>
    </main>
  )
}

export default Login