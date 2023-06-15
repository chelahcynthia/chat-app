import React, { useState, useEffect ,useContext} from 'react'
import { Context } from '../context'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';


const ChatEngine = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine-advanced").then((module) => module.MessageFormSocial)
);





function chat() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="807c6c56-0f5e-4d65-b3e6-1e49d938ea50"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  )
}

export default chat