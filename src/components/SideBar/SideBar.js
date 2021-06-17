import React from 'react';
import './SideBar.css'

function SideBar() {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Accounts</h3>
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <a href="#checkingSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Checking</a>
                        <ul className="collapse list-unstyled" id="checkingSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#savingsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Savings</a>
                        <ul className="collapse list-unstyled" id="savingsSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#iraSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Individual Retierment Accounts</a>
                        <ul className="collapse list-unstyled" id="iraSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#cdSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Certificate of Deposit</a>
                        <ul className="collapse list-unstyled" id="cdSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button >New Account</button>
                    </li>
                    <li>
                        <button >Remove Account</button>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;