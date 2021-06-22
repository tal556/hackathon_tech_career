import React from "react";

function ChatMessage(props: any) {
  const { user, message, uid, photoURL, createdAt } = props;

  return (
    <>
      <div>
        {/* <img
          src={photoURL || "https://i.imgur.com/rFbS5ms.png"}
          alt="{user}'s pfp"
        /> */}
      </div>
      <div>
        <p>{user}</p>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ChatMessage;
