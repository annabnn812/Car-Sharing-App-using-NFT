import React from "react";
import './styles/App.css';
import NavigationBar from "./NavigationBar/NavigationBar";
import LoginSignupContainer from "./LoginSignupContainer/LoginSignupContainer";
import worldID from "./wrd"; 

function Home() {
  return (
    <div className="home">
      <NavigationBar />
      <div className="container">
      <div className="centr">
      <br />
      &nbsp;
      <div id="world-id-container">
        
      </div>
      
							<p className="title">💎 Car Sharing Service </p>
							<br></br>
							<p className="subtitle">Do you need a car?  </p>
							<p className="subtitle">Feel free - Use car sharing!</p>
							<br></br>
						</div>
			<img src="https://thumbs.gfycat.com/GivingYoungGypsymoth-size_restricted.gif" alt="CSS" />
     
      <LoginSignupContainer/>
      &nbsp;
     
      </div>
     
      &nbsp;
        <p className="text-center"><a href="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"><img className="nav-social" src="/icons/linkedin.png" alt="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"/></a>
            <a href="http://annabnn.com/"><img className="nav-social" src="/icons/internet.png" alt="http://annabnn.com/"/></a>
            <a href="https://github.com/annabnn812"><img className="nav-social" src="/icons/GitHub.png" alt="https://github.com/annabnn812"/></a>
            <a href="https://twitter.com/_AnnaBNN"><img className="nav-social" src="/icons/twitter.png" alt="https://twitter.com/_AnnaBNN"/></a>
			</p>
      &nbsp;
          <p className="m-0 text-center text-white">
            Copyright &copy; Car Sharing Service Team 2022
          </p>
          <br />
      &nbsp; 
    </div>
 
  );
}

export default Home;
