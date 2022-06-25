import React from "react";

function Profile() {
  return (
    <div className="help">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-4">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://assets.faceit-cdn.net/avatars/2b80fa70-324e-47d4-beae-956b9e907aef_1571590165889.jpg"
              alt=""
            />
            
          </div>
          <div className="col-lg-8">
          <p className="m-0 text-left text-white">
            <h1 className="font-weight-light">Your Profile</h1> </p>
            &nbsp;
        <br />
            <button className='cta-buttonProfile confirmmm'    >
            Account info
						</button>  
            &nbsp;
        <br />
        &nbsp;
        <br />
        <button className='cta-buttonProfile confirmmm'    >
        Personal info
						</button>  
            &nbsp;
        <br />
        &nbsp;
        <br />
        <button className='cta-buttonProfile confirmmm'    >
        Settings
						</button>  
            &nbsp;
        <br />
        &nbsp;
        <br />
            <p className="m-0 text-left text-white">
              <h3>Completed trips</h3>
              <p>06/25/22 Account: 0x495De456E4DBf47879669BC5bf762aEf72EE5eEA ; Amount: 395.72746</p>
              <p>06/12/22 Account: 0x495De456E4DBf47879669BC5bf762aEf72EE5eEA ; Amount: 393.442623</p>
              <p>04/15/22 Account: 0xaD96c0b51D5be8C190F2d7cdABbFd4173Af2b06c ; Amount: 98.3606557</p>
              <p>03/10/22 Account: 0x495De456E4DBf47879669BC5bf762aEf72EE5eEA ; Amount: 590.163934</p>
              <p>03/08/22 Account: 0x495De456E4DBf47879669BC5bf762aEf72EE5eEA ; Amount: 295.081661</p>
              <p>02/23/22 Account: 0xaD96c0b51D5be8C190F2d7cdABbFd4173Af2b06c ; Amount: 73.7704917</p>
              <p>02/15/22 Account: 0x5cDE818C3B0FC057478Cc03b3fafB01274304d3B ; Amount: 147.540984</p>
               
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

export default Profile;