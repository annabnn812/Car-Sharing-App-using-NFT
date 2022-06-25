import React, { useState } from "react";



function Help() {


  return (
    <div className="help">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://snip1.ru/wp-content/uploads/2021/06/sluzhba-texpodderzhki-rabotaet-dlya-vas-kruglosutochno.jpg"
              alt=""
            />
            
          </div>
          <div className="col-lg-5">
          <p className="m-0 text-left text-white">
            <h1 className="font-weight-light">Help</h1> </p>
            
            <p className="m-0 text-left text-white">
              <h3>How do I register?</h3>
              <p> It is necessary to download the Carshering service application, 
                send a photo of your driver's license and yourself with your passport to the chat,
                 and then wait a little while until the check is completed. If everything is fine, 
                 then you will be registered quickly.</p>
                 <h3>If I'm from another country?</h3>
                 <p>The conditions are the same: at least 21 years and 2 years of driving experience in category B.</p>
                 <h3>Where can I drive?</h3>
                 <p>The exact boundaries of the travel zones can be viewed on the map.</p>
            </p>
            
          </div>
        </div>
      </div>
      &nbsp;
      <p className="text-center"><a href="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"><img className="nav-social" src="/icons/linkedin.png" alt="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"/></a>
            <a href="http://annabnn.com/"><img className="nav-social" src="/icons/internet.png" alt="http://annabnn.com/"/></a>
            <a href="https://github.com/annabnn812"><img className="nav-social" src="/icons/GitHub.png" alt="https://github.com/annabnn812"/></a>
            <a href="https://twitter.com/_AnnaBNN"><img className="nav-social" src="/icons/twitter.png" alt="https://twitter.com/_AnnaBNN"/></a>
			</p>
      &nbsp;
          <p className="m-0 text-center text-white">
            Copyright &copy;  Car Sharing Service Team  2022
          </p>
          <br />
      &nbsp;
    </div>
  );
}

export default Help;