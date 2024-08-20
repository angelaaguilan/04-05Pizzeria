import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavBar.jsx";
//import Home from "./component/Home.jsx";
// import RegisterPage from "./component/RegisterPage.jsx";
// import LoginPage from "./component/LoginPage.jsx";
//import Cart2 from "./component/Cart2.jsx";
import Cart3 from "./component/Cart3.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Cart2></Cart2> */}
      <Cart3></Cart3>
      <Footer></Footer>
    </>
  );
}

export default App;
