import { Dots, NewRoom, Search } from "../../../svg";
import { useEffect, useReducer } from "react";
import { friendspage } from "../../../functions/reducers";
import { getFriendsPageInfos } from "../../../functions/user";
// import Contact from "./Contact";
import sponsorscreen from "../../../svg/tide.gif";

import "./style.css";
import Card from "./Card";
export default function RightHome({ user }) {
  const color = "#65676b";

  const [{ loading, error, data }, dispatch] = useReducer(friendspage, {
    loading: false,
    data: {},
    error: "",
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    dispatch({ type: "FRIENDS_REQUEST" });
    const data = await getFriendsPageInfos(user.token);
    if (data.status === "ok") {
      dispatch({ type: "FRIENDS_SUCCESS", payload: data.data });
    } else {
      dispatch({ type: "FRIENDS_ERROR", payload: data.data });
    }
  };

  return (
    <div className="right_home">
      <div className="heading">Friends</div>

      <div className="splitter1"></div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contacts_header_right">
            {/* <div className="contact_circle hover1">
              <NewRoom color={color} />
            </div>
            <div className="contact_circle hover1">
              <Search color={color} />
            </div>
            <div className="contact_circle hover1">
              <Dots color={color} />
            </div> */}
          </div>
        </div>
        <div className="contacts_list">
          {/* <Contact user={user} /> */}

          {data.friends &&
            data.friends.map((user) => (
              <Card
                userr={user}
                key={user._id}
                type="friends"
                getData={getData}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
