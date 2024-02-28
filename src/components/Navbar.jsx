import { Component } from "react";
import "./NavbarStyleSheet.css";
class Navbar extends Component {
    state={clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    render(){
    return(
        <>
        {/* this is a Navbar and its have two parts first is logo and second is {Home,Shop,Blog,Content} */}
        <nav> 
            <a href="#" className="img">
                <img src="src\assets\logo\on2.png" className="logo"></img>
            </a>
            <div className="nav-right-part">
                <ul id="nav-right-part-ul" className={this.state.clicked ? "#nav-right-part-ul active" : "#nav-right-part-ul"}>
                    <li><a href="#" className ="active">Home </a></li>
                    <li><a href="#" >Shop </a></li>
                    <li><a href="#" >Blog </a></li>
                    <li><a href="#" >Content </a></li>
                </ul>
            </div>

            <div className="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                 {/* <i className="fas fa-bars"></i>
                 <i className="fas fa-times"></i> */}

            </div>
        </nav>
        </>
    )
                }
}

export default Navbar;