import React from 'react';
function Team() {
    return ( 
        <div className='container p-5 '>
            <div className='row '>
                 <h2 className="text-muted  text-center  fs-4 mb-5 ">People</h2>
                 <div className='col-6 text-center'>
                    <img src="media/images/nithinKamath.jpg" style={{width:"60%",borderRadius:"150px",marginLeft:"30px"}} className='mb-1'></img>
                    <h6 className='mt-2'>Nithin Kamath</h6>
                    <p className='text-muted '>Founder,CEO</p>
                 </div>
                   <div className='col-6'style={{fontSize:"1.1em"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                       <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>connect on <a href="#" style={{textDecoration:"none"}}>HomePage</a>/
                        <a href="#" style={{textDecoration:"none"}}>TradingQ&A</a>/ 
                        <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>

                 </div>
            </div>

        </div>
    
     );
}

export default Team;