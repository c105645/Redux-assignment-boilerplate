import React, { useState } from 'react';
import newspaperImg from '../assets/news-4301.svg'
import './HeaderComponent.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import {userLoggedOut, login} from '../Slices/AuthSlice';
import { useSelector, useDispatch } from 'react-redux'
import {user} from '../Slices/AuthSlice'


const Header = () => {

    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isFetching = useSelector((state) => state.auth.loading);

    const [show, setShow] = useState(false);

    const toggleModal = () => setShow(!show);
    const handleClose = () => setShow(false);

    const handleLogout = () => {
        dispatch(userLoggedOut("loggedout"));
    };


    const handleLogin = (entry) => {
        setShow(false);

        dispatch(login(entry))
    }


    return (
        <div className="headercontainer">
            <div className="logoHeader">
                <img className="newsicon" src={newspaperImg} alt="" />
                <h1>News Today</h1>
            </div>
            <div className="loginContainer">
                {!isAuthenticated ?
                    <Button variant="primary" className='w-100' onClick={toggleModal}>
                         Login
                        {isFetching ?
                            <span className="spinner-grow spinner-grow-sm"></span>
                            : null
                        }
                    </Button>
                    :
                    <div className='logoutContainer'>
                        <span className="mr-3 logoutspan"> <i className="bi bi-person-circle"></i> {sessionStorage.getItem("username")}</span>
                        <Button variant="primary" className="logoutButton" onClick={handleLogout}>
                            Logout
                            {isFetching ?
                                <span className="spinner-grow spinner-grow-sm"></span>
                                : null
                            }
                        </Button>
                    </div>
                }
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onSubmit={handleLogin} />
                </Modal.Body>

            </Modal>

        </div>
    )
}
export default Header;