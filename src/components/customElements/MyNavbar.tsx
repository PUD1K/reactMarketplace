import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/users/UserSlice';
import MyDropdown from './MyNavDropdown';
import basketImg from '../../static/basket.png'
import { componentsSlice } from '../../store/reducers/components/ComponentsSlice';


const MyNavbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const {isLoggedIn} = useAppSelector(state => state.userReducer)
  const {showCanvas} = useAppSelector(state => state.componentsReducer)
  const dispatch = useAppDispatch();

  const dropdown = `dropdown-menu${isOpen? " show" : ""}`

  const email = JSON.parse((localStorage.getItem('userData') || '{}')).email;
  const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;
  const navigateTo = `/basket/${username}`

  const setShowCanvas = () => {
    dispatch(componentsSlice.actions.setShowCanvas());
  }

  const personalAccount = (isLoggedIn: boolean, email: string) => {
    if(isLoggedIn)
      return (
        <>
          <MyDropdown
              email={email}
              username={username}/>
          <Link className='ms-3 me-3 nav-link active active' to={navigateTo}>
              <img 
                src={basketImg}
                alt=''
                width='30'
                height='30'
                />
            </Link>
        </>
      )
    return (
      <Link to ='/login'>
        <button className="btn btn-outline-light" type="submit">Войти</button>
      </Link>
    )
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{color: 'white'}}>
    <div className="container-fluid">

    <button className="navbar-brand btn" onClick={() => setShowCanvas()} type="submit">
      <span className="navbar-toggler-icon"></span>
    </button>

      <Link className="navbar-brand" to="">LZONE</Link>

      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Главная</Link>
          </li>
          <li className="nav-item me-2">
            <Link className="nav-link active" to="/categories">Категории</Link>
          </li>
          <form className="d-flex mw-100">
            <input className="form-control me-2 col-md-5" type="search" placeholder="Введите наименование товара" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Поиск</button>
          </form>
        </ul>
          {personalAccount(isLoggedIn, email)}
      </div>
    </div>
  </nav>
)}
export default MyNavbar