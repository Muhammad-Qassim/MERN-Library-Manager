import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Nav() {
  return (
    <nav className = "navbar navbar-dark bg-dark pt-3 pb-3">
      <div className="container">
          <a className="navbar-brand mx-auto" href="#">MERN Library Management</a>
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
      <div>
        <h1>BODY</h1>
      </div>
      <Footer/>
    </div>
      
  );
}

export default App;
