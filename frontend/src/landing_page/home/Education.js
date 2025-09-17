import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" style={{width:"70%"}}></img>

                </div>
                <div className='col-6'>
                    <h1 className='fs-4 mb-4'>Free and open market education</h1>
                    <p className='text-muted mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                     <a href="#"style={{ textDecoration: "none" }}>Varsity<i className="fa-solid fa-arrow-right "></i></a>
                     <p className='text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a href="#"style={{ textDecoration: "none" }}>TradingQ&A<i className="fa-solid fa-arrow-right "></i></a>

                </div>

            </div>
            
        </div>
     );
}

export default Education;