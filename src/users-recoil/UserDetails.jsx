import { useRecoilValue } from "recoil";
import { getUserByID } from "./recoil-state/selectors";

import UserDetailsComponent from "../users-shared/UserDetailsComponent";

const UserDetails = (props) => {
  const {
    match: {
      params: { userId },
    },
  } = props;

  const selectedUser = useRecoilValue(getUserByID(userId));
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
