import React from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div>
      <img src={tweet.profileImg} alt="" />

      <div>
        <div className="flex items-center space-x-1">
          <p className="mr-1 font-bold">{tweet.username}</p>
          <p>@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
          <TimeAgo date={tweet._createdAt} className="text-sm text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
