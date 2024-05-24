import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import TextInput from "../../components/Input";
import { sendMessage } from "../../slices/messages";
import formatDate from "../../utils/formatDate";

function MessagesFooter() {
  const [mess, setMess] = useState("");
  const dispatch = useDispatch();
  const { chats, curentChat, messages } = useSelector(
    (state) => state.messages
  );
  const { currentUser } = useSelector((state) => state.auth);
  const curentChatUser = curentChat?.users?.find(
    (chat) => chat?._id == currentUser?._id
  );
  return (
    <div className="sticky bottom-0">
      <div className="flex items-center justify-between bg-white border-t border-slate-200 px-4 sm:px-6 md:px-5 h-16">
        {/* Plus button */}
        <button className="shrink-0 text-slate-400 hover:text-slate-500 mr-3">
          <span className="sr-only">Add</span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
          </svg>
        </button>
        {/* Message input */}
        {/* <form className="grow flex"> */}
        <div className="grow mr-3">
          <label htmlFor="message-input" className="sr-only">
            Type a message
          </label>
          <TextInput
            id="message-input"
            onChange={(val) => {
              setMess(val);
            }}
            value={mess}
          />
          {/* <input id="message-input" className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300" type="text" placeholder="Aa" /> */}
        </div>
        <button
          className="btn bg-primary-500 hover:bg-primary-600 text-white whitespace-nowrap"
          onClick={() => {
            console.log(mess);
            if (mess !== "") {
              let formData = new FormData();
              const today = new Date();
              const messApi = {
                createdAt: formatDate(today, "YYYY-MM-DD"),
                content: mess,
                status: "NEW",
                userId: currentUser?._id,
                _id: uuid(),
              };
              formData.append(
                `messages[${messages[curentChat?._id]?.length}][createdAt]`,
                formatDate(today, "YYYY-MM-DD")
              );
              formData.append(
                `messages[${messages[curentChat?._id]?.length}][content]`,
                mess
              );
              formData.append(
                `messages[${messages[curentChat?._id]?.length}][userId]`,
                currentUser?._id
              );
              formData.append(
                `messages[${messages[curentChat?._id]?.length}][status]`,
                "NEW"
              );
              formData.append(
                `messages[${messages[curentChat?._id]?.length}][_id]`,
                uuid()
              );
              // {
              //   ...messApi,
              //   // "assets": MultipartFile.fromFileSync(result.files.single.path!,
              //   //     filename: result.files.single.name)
              // }
              formData.append(`version`, curentChat?.version ?? 1);
              dispatch(
                sendMessage({
                  data: formData,
                  id: curentChat._id,
                })
              ).then(() => {
                setMess("");
              });
            }
          }}
        >
          Envoyer -&gt;
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default MessagesFooter;
