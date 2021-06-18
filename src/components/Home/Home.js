import React from 'react';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
    return (
        <>
            <div className="header">
                <div className="inner-header flex">
                    <h1>Welcome to Merit Bank</h1>
                </div>

                <div>
                    <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>

           
           

            <div align="center">
                <hr style={{ borderTop: '2px solid black', width: '90%' }} />
            </div>


            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="https://api.time.com/wp-content/uploads/2016/04/how-your-checking-account-affects-your-mood.jpg" alt="checking account" />
                        <div className="card-body">
                            <h5 className="card-title">Checking Account</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://cdn.gobankingrates.com/wp-content/uploads/2019/09/illustration-businessman-sitting-on-piggy-bank-using-laptop-iStock-1136812263-Edit.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Savings Account</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="https://www.creditloan.com/media/resize/700x394/choosing-a-certificate-of-deposit-cd-vs-a-savings-account-0.png" alt="checking account" />
                        <div className="card-body">
                            <h5 className="card-title">Certificate of Deposit</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://www.moneycrashers.com/wp-content/uploads/2020/09/ira-individual-retirement-account-block-letters-1068x713.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Individual Retirement Account</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div align="center">
                <hr style={{ borderTop: '2px solid black', width: '90%' }} />
            </div>

            <Footer />
        </>
    );
}

export default Home;