import React from "react";

import default_person_picture from "../../images/amphimill/default_person_picture.png";
import { useDispatch, useSelector } from "react-redux";
import { getValues } from "../../utils/getValues";
import moment from "moment";

function MessagesBody({ fetchData }) {
  const dispatch = useDispatch();
  const { chats, curentChat, messages } = useSelector(
    (state) => state.messages
  );
  const { currentUser } = useSelector((state) => state.auth);
  const getTime = (val) => {
    const nbdays = Math.abs(new Date(val) - new Date()) / (1000 * 3600 * 24);
    let days;
    if (nbdays <= 1) {
      days = moment(val).format("dddd");
      return moment(val).format("hh[h]mm");
    } else return moment(val).format("DD MMM YYYY");
  };
  // if (messages[curentChat?.id]?.listFlat.length < 1 && curentChat?.id) {
  //     dispatch(fetchData({ id: curentChat?.id }));
  // }
  return (
    <div className="grow px-4 sm:px-6 md:px-5 py-6 relative">
      <React.Fragment>
        {messages[curentChat?._id]?.map((item, index) => (
          <div
            key={index}
            className={`flex items-start mb-4 last:mb-0 ${
              currentUser?._id === item?.userId ? "justify-end" : ""
            }`}
          >
            <img
              className="rounded-full mr-4"
              src={
                currentUser?.id !== item?.userId
                  ? getValues(curentChat)?.image
                  : currentUser?.picture?.baseUrl || default_person_picture
              }
              width="40"
              height="40"
              alt="User 02"
            />
            <div>
              <div className={`text-sm ${
              currentUser?._id === item?.userId ? "bg-primary-200 text-white" : "bg-slate-100 text-slate-500"
            }  p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1`}>
                {/* <img className="rounded-lg shadow-md mb-1" src={ChatImage} width="240" height="180" alt="Chat" /> */}
                {item?.content}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500 font-medium">
                  {getTime(item?.createdAt)}
                </div>
                <svg
                  className="w-5 h-3 shrink-0 fill-current text-emerald-500"
                  viewBox="0 0 20 12"
                >
                  <path d="M10.402 6.988l1.586 1.586L18.28 2.28a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0L8.988 8.402l-2.293 2.293a1 1 0 01-1.414 0l-3-3A1 1 0 013.695 6.28l2.293 2.293L12.28 2.28a1 1 0 011.414 1.414l-3.293 3.293z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>

      {/* Date separator */}
      {/* <div className="flex justify-center">
        <div className="inline-flex items-center justify-center text-xs font-medium px-2.5 py-1 bg-white border border-slate-200 rounded-full my-5">
          Tuesday, 20 January
          </div>
      </div> */}
      {/* Chat msg */}
      {/* <div className="flex items-start mb-4 last:mb-0">
        <img className="rounded-full mr-4" src={!currentUser?.is_enterprise ? currentUser?.person?.picture : currentUser?.enterprise?.logo || default_person_picture} width="40" height="40" alt="User 01" />
        <div>
          <div className="text-sm bg-white text-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-md mb-1">
            <svg className="fill-current text-slate-400" viewBox="0 0 15 3" width="15" height="3">
              <circle cx="1.5" cy="1.5" r="1.5">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
              </circle>
              <circle cx="7.5" cy="1.5" r="1.5">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
              </circle>
              <circle cx="13.5" cy="1.5" r="1.5">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
              </circle>
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MessagesBody;
 