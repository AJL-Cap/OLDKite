// import React, { useEffect, useState } from "react";
// import { useObject } from "react-firebase-hooks/database";
// import { useForm } from "react-hook-form";
// import { useAuthState } from "react-firebase-hooks/auth";
// import fire from "../fire";
// import Profile from "./Profile";

// export default function CurrentUser(props) {
//   const [user, initialising, error] = useAuthState(fire.auth());

//   if (initialising) {
//     return (
//       <div>
//         <p>loading...</p>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }
//   if (user) {
//     return props.profile && <Profile userId={user.uid} />;
//   }
// }
