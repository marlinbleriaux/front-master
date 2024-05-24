import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/Input";
import ChannelMenu from "../../partials/messages/ChannelMenu";
import DirectMessages from "../../partials/messages/DirectMessages";
import {
  getChat,
  getMessages,
  replaceCurrentChat,
} from "../../slices/messages";
import { getValues } from "../../utils/getValues";
import PaginationNumeric2 from "../../components/PaginationNumeric2";
import SelectInput from "../../components/SelectInput";
import perPages from "../../common/enum/perPages";

function Discussions({ msgSidebarOpen, setMsgSidebarOpen }) {
  const dispatch = useDispatch();
  const { chats, curentChat, messages, pagination } = useSelector(
    (state) => state.messages
  );
  const { currentApp, currentUser } = useSelector((state) => state.auth);

  const [search, setSearch] = useState("");
  const [items, setItems] = useState(chats);
  const [perPage, setPerPage] = useState(25);
  const [error, setError] = useState(null);
  const [pages, setPage] = useState(parseInt(pagination?.page) || 1);

  const getTime = (val) => {
    const nbdays = Math.abs(new Date(val) - new Date()) / (1000 * 3600 * 24);
    let days;
    if (nbdays <= 7) {
      days = moment(val).format("dddd");
      return moment(val).format("hh[h]mm");
    } else return moment(val).format("DD MMM YYYY");
  };

  const getData = (page) => {
    fetchData({ pagess: page });
    setPage(page);
  };

  const paginateFront = () => fetchData({ incrementPage: true });
  const paginateBack = () => fetchData({ decrementPage: true });

  const fetchData = async ({
    pagess = null,
    incrementPage = false,
    decrementPage = false,
    range = "",
  } = {}) => {
    let { page } = { error, page: pages };
    page = incrementPage ? page + 1 : pagess ?? page;
    page = decrementPage ? page - 1 : pagess ?? page;
    let params = { perPage, page };
    // console.log(type);
    // console.log("**********************************");
    // if (search != "") {
    //   params[searchBy] = `regex:${search}`;
    // }
    // if (lastDate != "" || range != "") {
    //   const selectedPeriod = range != "" ? range : lastDate;
    //   const { start, end } = formatDataByPeriod(selectedPeriod);
    //   if (end != "") {
    //     params["createdAt"] = "gt:" + start;
    //     params["createdAt"] = "lt:" + end;
    //     // params['createdAt'] = "lt:"+end+"&createdAt=gt:"+start;
    //   }
    // }

    try {
      dispatch(
        getChat({
          params,
        })
      );
      setPage(page);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const OnSearch = async (val) => {
    // setSearch(search);
    if (val && val !== "") {
      setItems(
        [...chats].filter((item) =>
          item.users[1]["lastName"]
            ?.toString()
            ?.toLowerCase()
            ?.includes(val.toLowerCase())
        )
      );
    } else {
      setItems([]);
    }
  };
  return (
    <div
      id="messages-sidebar"
      className={`absolute z-20 top-0 bottom-0 border w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out ${
        msgSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sticky top-16 bg-white overflow-x-hidden overflow-y-auto shrink-0 border-r border-slate-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]">
        {/* #Marketing group */}
        <div>
          {/* Group header */}
          <div className="sticky top-0 z-10 bg-white">
            <div className="flex items-center bg-white border-b border-slate-200 px-5 h-16">
              <div className="w-full flex items-center justify-between">
                <ChannelMenu />
                <div>
                  <button className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2">
                    <svg
                      className="w-4 h-4 fill-current text-slate-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                    </svg>
                  </button>

                  {/* Close button */}
                  <button
                    className="md:hidden text-slate-400 hover:text-slate-500 mr-4 p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"
                    onClick={() => setMsgSidebarOpen(!msgSidebarOpen)}
                    aria-controls="messages-sidebar"
                    aria-expanded={msgSidebarOpen}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Search form */}
            <form className="mx-3 my-2">
              <TextInput
                id="app-search"
                search
                placeholder="Search…"
                onChange={(val) => {
                  setSearch(val);
                  OnSearch(val);
                }}
                onSearchClick={OnSearch}
                value={search}
              />
            </form>
            <div className="text-xs mx-3 font-semibold text-slate-400 uppercase mb-3 mt-2">
              Vos Discussions
            </div>
          </div>

          {/* Group body */}
          <div className="px-5 pb-4">
            {/* Direct messages */}

            <div className="mt-4">
              <ul className="mb-6">
                <React.Fragment>
                  {(items.length > 0 ? items : chats)?.map((item, index) => (
                    <li key={index} className="-mx-2">
                      <button
                        className={`flex items-center justify-between w-full p-2 rounded ${
                          item?._id == curentChat?._id && item?._id != null
                            ? "bg-primary-100"
                            : "white"
                        }`}
                        onClick={() => {
                          setMsgSidebarOpen(false);
                          dispatch(replaceCurrentChat(item));
                          // if (messages[curentChat?.id]?.listFlat.length < 1 && curentChat?.id) {
                          //     console.log('getmessahge');
                          dispatch(getMessages({ id: item?._id }));
                          // fetchData({ id: item?._id });
                          // }
                        }}
                      >
                        <div className="flex items-center truncate">
                          <img
                            className="w-[40px] h-[45px] rounded-full mr-2"
                            src={getValues(item, currentUser)?.image}
                          />
                          <div className="text-left">
                            <span className="text-xs font-medium text-slate-800 text-left">
                              {getValues(item, currentUser)?.title}
                            </span>
                            <div className="truncate">
                              <div className="text-xs text-slate-500 text-start">
                                {item?.lastMessage}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="flex items-center ml-2">
                                    <div className="text-xs inline-flex font-medium bg-indigo-400 text-white rounded-full text-center leading-5 px-2">{getTime(item?.last_message?.updated_at)}</div>
                                </div> */}
                        <div className="block items-center">
                          <div className="text-wrap text-xs text-primary-500">
                            {getTime(item?.updatedAt)}
                          </div>
                          {/* <svg className="w-3 h-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg> */}
                        </div>
                      </button>
                    </li>
                  ))}
                </React.Fragment>
              </ul>
            </div>
          </div>
          {/* <DirectMessages msgSidebarOpen={msgSidebarOpen} setMsgSidebarOpen={setMsgSidebarOpen} /> */}

          <div className="px-6 py-3 mt-10 bg-slate-50 border border-slate-200 rounded-sm">
            <div className="flex justify-between">
              <div> </div>
              <div className="flex items-center ">
                <div className="mr-5"></div>
                <div className="mr-5">
                  <SelectInput
                    option={perPages}
                    onChange={(val) => {
                      setPerPage(val);
                    }}
                    placeholder={"25"}
                  />
                </div>
                <div className="mr-5">Total: </div>
                <div className="mr-5">{pagination?.total ?? 0} </div>
              </div>
            </div>
            <PaginationNumeric2
              lastPage={pagination?.totalPage || 1}
              // totalPosts={posts.length}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={pages}
              fetchData={getData}
            />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default Discussions;
