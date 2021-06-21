import React from 'react';
import AccountPreview from '../AccountPreview/AccountPreview';
import AddAccountModal from '../AddAccountModal/AddAccountModal';
import './SideBar.css'

function SideBar(props) {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3 id="sidebarHeader">Accounts</h3>
                </div>

                <ul className="list-unstyled components" id="sidebarMenu">
                    <li>
                        <a href="#checkingSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" id="sidebarMenuHeader">Checking</a>
                        <ul className="collapse list-unstyled" id="checkingSubmenu">
                            <AccountPreview accounts={props.account.checkingAccounts} type='Checking' />
                        </ul>
                    </li>
                    <li>
                        <a href="#savingsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" id="sidebarMenuHeader">Savings</a>
                        <ul className="collapse list-unstyled" id="savingsSubmenu">
                            <AccountPreview accounts={props.account.savingsAccounts} type='Savings' />
                        </ul>
                    </li>
                    <li>
                        <a href="#iraSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" id="sidebarMenuHeader">Individual Retierment Accounts</a>
                        <ul className="collapse list-unstyled" id="iraSubmenu">
                        <AccountPreview accounts={props.account.iraAccounts} type='Individual Retierment' />
                        </ul>
                    </li>
                    <li>
                        <a href="#cdSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" id="sidebarMenuHeader">Certificate of Deposit</a>
                        <ul className="collapse list-unstyled" id="cdSubmenu">
                        <AccountPreview accounts={props.account.cdAccounts} type='Certificate of Deposit' />
                        </ul>
                    </li>
                    <li>
                        <AddAccountModal />
                    </li>
                    <li>
                        <a href="#" id="sidebarMenuHeader">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;