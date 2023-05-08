import React from "react";

function GithubAvatar({ username, size = 80 }) {
  return (
    <img
      src={`https://github.com/${username}.png?size=${size}`}
      alt={`${username}'s avatar`}
      style={{ width: size, height: size, borderRadius: "50%" }}
    />
  );
}

export default GithubAvatar;