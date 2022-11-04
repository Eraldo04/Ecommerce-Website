import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";
import "./topbar.css";

export default function Topbar() {

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();


  const handleClickLogout = () => {
    dispatch(logout(user))

  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Eraldo Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link to="/login">
            <h4 onClick={() => handleClickLogout(user)}>Dil</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
