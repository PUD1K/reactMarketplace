import React, {useState, useCallback} from 'react';
import { IRole } from '../../models/RoleInterface';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/users/UserSlice';

interface UserDataProps{
    email: string,
    username: string,
    roles: []
}

enum UserRoles{
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'
}

const MyNavDropdown = ({email, username, roles}: UserDataProps): JSX.Element => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const dropdownClass = `dropdown-menu${isOpen? " show" : ""}`
    const navigateTo = useCallback(() => {
      const to = `/my/${username}`;
      navigate(to);
    }, [username, navigate])

    const navigateToShopsAdministration = useCallback(() => {
      const to = `/shops_administration`;
      navigate(to);
    }, [navigate])

    const navigateToShopSettings = useCallback(() => {
      const to = `/shop_setting`;
      navigate(to);
    }, [navigate])

    const navigateToManagment = useCallback(() => {
      const to = `/shop_managment`;
      navigate(to);
    }, [navigate])


    const logout = () => {
      localStorage.setItem('userData', '');
      localStorage.setItem('token', '');
      dispatch(userSlice.actions.setLoggedIn());
    }

    const roleExistInRoles = (role: string, roles: IRole[]) => {
      return !!roles.filter(i => i.value === role).length
    }

    return (
        <div>
          <ul className="navbar-nav me-1">
            <li className="nav-item dropdown">
              <a className="nav-link active dropdown-toggle" onClick={() => setIsOpen(!isOpen)} id="navbarDropdow" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {username}
              </a>
              <ul className={dropdownClass} aria-labelledby="navbarDropdown">
                <li onClick={() => navigateTo()}><Link className='dropdown-item' to=''>Личный кабинет</Link></li>
                {(roleExistInRoles(UserRoles.ADMIN, roles) && 
                  <li onClick={() => navigateToShopsAdministration()}><Link className='dropdown-item' to=''>Администрирование</Link></li>
                )}
                {(roleExistInRoles(UserRoles.MANAGER, roles) && 
                  <li onClick={() => navigateToShopSettings()}><Link className='dropdown-item' to=''>Настройки магазина</Link></li>
                )}
                {(roleExistInRoles(UserRoles.MANAGER, roles) && 
                  <li onClick={() => navigateToManagment()}><Link className='dropdown-item' to=''>Менеджмент</Link></li>
                )}
                <li><hr /></li>
                <li><Link className='dropdown-item' to='' onClick={() => logout()}>Выйти</Link></li>
              </ul>
            </li>
          </ul>
        </div>
    );
};

export default MyNavDropdown;