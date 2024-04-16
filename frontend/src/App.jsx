import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div>
      <h1>Upload Files Using Cloudinary Service</h1>
      <Link to="/">Home</Link> | <Link to="/upload">Upload</Link>
      <br />
      <br />
      <Outlet />
    </div>
  );
}

export default App;
