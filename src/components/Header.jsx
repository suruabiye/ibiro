import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { truncate } from '../utils';
import { ConnectWalletButton } from './ConnectWalletButton';

import logo from '/src/logo.png';

export default function Header() {
    const navigate = useNavigate();
    // const [isActive, setIsActive] = useState('dashboard');
    // const [toggleDrawer, setToggleDrawer] = useState(false);
    const { connect, address } = useStateContext();
    const profile = () => {
        if (address){
            return <li><Link to="profile">Profile</Link></li>
        }
    }
    return (
        <div>
            <header className="header">
                <div id="sticky-header" className="header-box header-no-bg pl-65 pr-65">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-6 d-flex align-items-center">
                        <div className="header__logo">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-6 col-md-9">
                        <div className="header__menu f-right">
                        <nav id="mobile-menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/campaigns">Campaigns</Link>
                                </li>
                                <li>
                                    <a href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if(address) navigate('create-campaign')
                                        }}
                                        >
                                        {address ? 'start campaign' : ''}
                                    </a>
                                </li>
                                {profile()}
                                <li>
                                    <ConnectWalletButton className="login-btn theme-bg" />
                                </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mobile-menu" />
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </div>
    );
}