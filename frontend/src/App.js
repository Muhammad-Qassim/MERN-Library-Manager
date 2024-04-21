import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// imports for components
import AvailableBookList from "./components/AvailableBookList";
import CheckedoutBookList from "./components/CheckedoutBookList";

function Nav() {
  return (
    <nav className = "navbar navbar-dark bg-dark pt-3 pb-3">
      <div className="container">
          <a className="navbar-brand mx-auto" href="#"><h2 className="secondary-heading">MERN Library Management</h2></a>
        </div>
    </nav>
);
}

function Footer() {
  return (
    <footer className="bg-dark text-white pt-3 pb-3 mt-5">
      <div className="container text-center">
      <p className='m-0'>&copy;2024 Muhammad Qassim. All rights reserved.</p>
    </div>
  </footer>
  );
}


function App() {
  return (
    <div>
      <Nav/>
      <div className="container mt-3 mb-3">
        <AvailableBookList/>
        <CheckedoutBookList/>
      </div>
      <Footer/>
    </div>
      
  );
}

export default App;
