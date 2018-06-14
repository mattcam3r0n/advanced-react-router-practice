import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

function Profiles(props) {
  const userDivs = props.users.map((user,i) => {
    return (
      <div key={i}>
        {user.firstName} - {user.lastName}
        <Link to={"/profile/" + user.id}> View </Link>
      </div>);
  });
  return (   
    <div>{userDivs}</div>
  );
}

export default connect(function (state) {
  return {users: state.users};
})(Profiles);


