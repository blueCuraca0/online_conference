import { FC } from "react";
import { useParams } from "react-router-dom";

import { UserProfileSection } from "modules/UserProfileModule";

const UserProfilePage: FC = () => {
  const { userId } = useParams<{ userId: string }>();

  if (!userId) return null;

  return <UserProfileSection userId={userId} />;
};

export default UserProfilePage;
