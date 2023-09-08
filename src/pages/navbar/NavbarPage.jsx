// import React from "react";
// import "./NavbarPage.css";

// const NavBarPage = (props) => {
//   const checkIsOpen = props.isOpen
//   return (
//     {checkIsOpen ? (<div className="navbar_page" id="navbar_page">
//       <div className="navbar_page__content">
//         <div className="navbar_parent">
//           <a href="#features" className="navbar_child">
//             Features
//           </a>
//           <a href="#story" className="navbar_child">
//             Stories
//           </a>
//           <a href="#houses" className="navbar_child">
//             Houses
//           </a>
//           <a href="#gallery" className="navbar_child">
//             Gallery
//           </a>
//           <a href="#contact" className="navbar_child">
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </div>) : ""}

//   );
// };

// export default NavBarPage;

import React from "react";
import "./NavbarPage.css";

const NavBarPage = (props) => {
  const isOpen = props.isOpen;

  return isOpen ? (
    <div className="navbar_page" id="navbar_page">
      <div className="navbar_page__content">
        <div className="navbar_parent">
          <a href="#features" className="navbar_child">
            Features
          </a>
          <a href="#story" className="navbar_child">
            Stories
          </a>
          <a href="#houses" className="navbar_child">
            Houses
          </a>
          <a href="#gallery" className="navbar_child">
            Gallery
          </a>
          <a href="#contact" className="navbar_child">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default NavBarPage;
