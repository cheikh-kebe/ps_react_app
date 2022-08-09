import React from "react";
//images
import logo from "../../assets/images/GloboLogo.png";
//styles
import "./header.css";
//routes 
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="row">
      <div className="col-md-5">
        <NavLink to='/'>
        <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="col-7 mt-5 subtitle">
        <h4>{props.subtitle}</h4>
      </div>
    </header>
  );
};

//Class Component

// export default class Header extends Component {
//   render() {
//     return (
//       <header className="row">
//         <div className="col-md-5">
//           <img className="logo" src={logo} alt="logo" />
//         </div>
//         <div className="col-7 mt-5 subtitle">
//           <h4>{this.props.subtitle}</h4>
//         </div>
//       </header>
//     );
//   }
// }
