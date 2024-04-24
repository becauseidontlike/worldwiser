import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1 className="test">WORLDWISER</h1>
      {/* reloading
      <a href="/pricing">Pricing</a> */}
      <Link to="/app">App?</Link>
    </div>
  );
}

export default Homepage;
