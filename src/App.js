import { Link } from "react-router-dom";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.card}>
      <h1>you can add user or product</h1>
      <p>this app is just a simple app that renders forms base on json file </p>
      <p>
        you can{" "}
        <Link className={styles.link} to="/addusers">
          add user
        </Link>{" "}
        or{" "}
        <Link className={styles.link} to="/addproduct">
          add product
        </Link>
      </p>
    </div>
  );
}

export default App;
