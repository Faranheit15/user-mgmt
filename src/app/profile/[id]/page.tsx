import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>UserProfile</h1>
      <hr />
      <p>{params.id}&apos;s UserProfile page</p>
    </div>
  );
};

export default UserProfile;
