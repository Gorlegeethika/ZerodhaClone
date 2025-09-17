import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' style={{width:"85%"}}></img>

                </div>
                <div className='col-6 p-4 mt-5 '>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to volumes in India daily by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                                 <li>
                                    <p>commodity derivatives</p>
                                </li>
                                 <li>
                                    <p>currently derivatives</p>
                                </li>
                            </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                 <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                 <li>
                                    <p>Bonds</p>
                                </li>
                            </ul>

                        </div>
                        <img src="media/images/pressLogos.png" style={{width:"90%"}}></img>
                    </div>

                </div>

            </div>
            
        </div>
     );
}

export default Awards ;