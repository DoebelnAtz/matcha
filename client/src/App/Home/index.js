import React from "react";
import { useGet, useRedirect } from "../../Hooks";
import { getLocalAuth } from "../../Utils";

const Home = () => {
  const [user, setUser] = useGet("/users/me");
  useRedirect(
    `/auth/verify/${getLocalAuth().user.u_id}`,
    !getLocalAuth().user.verified
  );
  return <div>home</div>;
};

export default Home;
