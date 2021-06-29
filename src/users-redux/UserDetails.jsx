import { useMemo } from "react";
import { useSelector } from "react-redux";

import UserDetailsComponent from "../users-shared/UserDetailsComponent";

const UserDetails = (props) => {
  const {
    match: {
      params: { userId },
    },
  } = props;
  const { users } = useSelector((state) => state.usersReducer);

  const selectedUser = useMemo(() => {
    return users.find((user) => user.id === Number(userId));
  }, [users, userId]);

  const { avatar, email, first_name, last_name } = selectedUser;

  return (
    <UserDetailsComponent
      avatar={avatar}
      email={email}
      first_name={first_name}
      last_name={last_name}
    />
  );
};

export default UserDetails;
