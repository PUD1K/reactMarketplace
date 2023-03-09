import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/users/UserSlice';

interface EmailProps{
    email: string,
    username: string
}

const MyNavDropdown = ({email, username}: EmailProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const dropdownClass = `dropdown-menu${isOpen? " show" : ""}`

    const logout = () => {
      localStorage.setItem('userData', '');
      localStorage.setItem('token', '');
      dispatch(userSlice.actions.setLoggedIn());
    }

    return (
        <div>
          <ul className="navbar-nav me-1">
            <li className="nav-item dropdown">
              <a className="nav-link active dropdown-toggle" onClick={() => setIsOpen(!isOpen)} id="navbarDropdow" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {username}
              </a>
              <ul className={dropdownClass} aria-labelledby="navbarDropdown">
                <li><Link className='dropdown-item' to='/email'>Личный кабинет</Link></li>
                <li><hr /></li>
                <li><Link className='dropdown-item' to='' onClick={() => logout()}>Выйти</Link></li>
              </ul>
            </li>
          </ul>
        </div>
    );
};

export default MyNavDropdown;