import React, { useState, useEffect, useRef } from "react";

import {
  getChat,
  getMessages,
  replaceCurrentChat,
} from "../../slices/messages";
import { useDispatch, useSelector } from "react-redux";
import Discussions from "./Discussions";
import MessagesHeader from "./MessagesHeader";
import MessagesFooter from "./MessagesFooter";
import MessagesBody from "./MessagesBody";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

function Messages() {
  const contentArea = useRef(null);
  const [msgSidebarOpen, setMsgSidebarOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { chats, curentChat, messages } = useSelector(
    (state) => state.messages
  );
  // const { listFlat, meta, pagination, listPaginated } = messages;
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [pages, setPage] = useState(1);

  const fetchData = async ({
    forceSync = false,
    incrementPage = false,
    id,
  } = {}) => {
    let { page } = { error, page: pages };
    page = incrementPage ? page + 1 : page; // Force fetch the next page worth of data when requested
    page = forceSync ? 1 : page; // Start from scratch

    setPage(page);
    try {
      dispatch(getMessages({ forceSync, page, id }));
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  useEffect(async () => {
    if (chats?.length < 1) dispatch(getChat({ id: currentUser?.id }));
    if (!curentChat?.id) {
      dispatch(replaceCurrentChat(chats[0]));
    }
    if (messages[curentChat?.id]?.messages?.length < 1 && curentChat?.id) {
      fetchData({ id: curentChat?.id });
    }
  }, []);

  useEffect(() => {
    contentArea.current.scrollTop = 99999999;
  }, [msgSidebarOpen]); // automatically scroll the chat and make the most recent message visible

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
        ref={contentArea}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="px-4 sm:px-6 lg:px-8 pt-2 w-full max-w-9xl mx-auto">
          <div className="relative flex ">
            {/* Messages sidebar */}
            <Discussions
              msgSidebarOpen={msgSidebarOpen}
              setMsgSidebarOpen={setMsgSidebarOpen}
              fetchData={fetchData}
            />

            {/* Messages body */}
            <div
              className={`grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out ${
                msgSidebarOpen ? "translate-x-1/3" : "translate-x-0"
              }`}
            >
              <MessagesHeader
                msgSidebarOpen={msgSidebarOpen}
                setMsgSidebarOpen={setMsgSidebarOpen}
              />
              <div className="sticky h-full">
                <MessagesBody fetchData={fetchData} />
              </div>
              <MessagesFooter />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
