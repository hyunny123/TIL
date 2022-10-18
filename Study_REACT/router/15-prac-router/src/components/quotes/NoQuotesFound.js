import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>⛔️인용문을 찾을 수 없음⛔️</p>
      <Link className="btn" to="/new-quote">
        인용문 추가
      </Link>
    </div>
  );
};

export default NoQuotesFound;
