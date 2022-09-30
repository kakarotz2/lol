import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap';
import './footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="d-flex flex-column h-100">
            <section className="hero text-white py-5 flex-grow-1">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="display-4">Bootstrap footer bottom</h1>
                            <p className="fst-italic text-muted">
                                Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of
                                your viewport. Snippet by{' '}
                                <a className="text-primary" href="https://bootstrapious.com/">
                                    Bootstrapious
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">FB.</h5>
                            <p className="small text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                            <p className="small text-muted mb-0">
                                &copy; Copyrights. All rights reserved.{' '}
                                <a className="text-primary" href=".">
                                    Rinh
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Get started</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Get started</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <button className="btn btn-primary" id="button-addon2" type="button">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
