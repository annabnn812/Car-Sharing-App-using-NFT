import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-black fixed-bottom">
        <div class="container">
        <p className="text-center"><a href="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"><img className="nav-social" src="/icons/linkedin.png" alt="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"/></a>
            <a href="http://annabnn.com/"><img className="nav-social" src="/icons/internet.png" alt="http://annabnn.com/"/></a>
            <a href="https://github.com/annabnn812"><img className="nav-social" src="/icons/GitHub.png" alt="https://github.com/annabnn812"/></a>
            <a href="https://twitter.com/_AnnaBNN"><img className="nav-social" src="/icons/twitter.png" alt="https://twitter.com/_AnnaBNN"/></a>
			</p>
    
          <p className="m-0 text-center text-white">
            Copyright &copy; AnnaBNN 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
