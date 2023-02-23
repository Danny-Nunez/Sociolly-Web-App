import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card({ userr, type, getData }) {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="contact hover3">
      <div className="contact_img">
        <Link to={`/profile/${userr.username}`}>
          <img src={userr.picture} alt="" />

          <div className="usfTitle">
            <span>
              {userr.first_name} {userr.last_name}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
