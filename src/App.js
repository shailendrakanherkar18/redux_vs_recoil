import { Link } from "react-router-dom";

function App() {
  return (
    <div className="text-center justify-content-center mt-15">
      <Link to="/users-redux">Link</Link> for <b>Redux</b> Users List <br />
      <Link to="/users-recoil">Link</Link> for <b>Recoil</b> Users List
    </div>
  );
}

export default App;
