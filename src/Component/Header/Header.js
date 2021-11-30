import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
                <img src={Logo} className='header__logo'/>
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
            </div>

             <div className='header__nav'>
                 <Link to='/login'>
                    <div className='header__option'>
                        <span className='Header__optionLineOne'>
                            Hello Guest
                        </span>
                        <span className='Header__optionLineTwo'>
                            Sign In
                        </span>
                    </div>
                 </Link>

                 <div className='header__option'>
                    <span className='Header__optionLineOne'>
                        Returns
                    </span>
                    <span className='Header__optionLineTwo'>
                        & Orders
                    </span>
                 </div>

                 <div className='header__option'>
                    <span className='Header__optionLineOne'>
                        Your
                    </span>
                    <span className='Header__optionLineTwo'>
                        Prime
                    </span>
                 </div>
                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                 
             </div>
        </div>
    )
}

export default Header
