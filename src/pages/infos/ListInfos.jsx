import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import InfoView from "./items/InfoView";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SearchForm from "../../partials/actions/SearchForm";
import DateSelect from "../../components/DateSelect";
import FilterButton from "../../components/DropdownFilter";
import { getInfos } from "../../slices/infos";
import PaginationNumeric2 from "../../components/PaginationNumeric2";
import SelectInput from "../../components/SelectInput";
import perPages from "../../common/enum/perPages";
import Transition from "../../utils/Transition";

// import levels from "../../common/enum/levels";
// import fillieres from "../../common/enum/fillieres";
import semester from "../../common/enum/semester";
// import faculties from "../../common/enum/faculties";
// import department from "../../common/enum/department";
// import universities from "../../common/enum/universities";
import infoCategorie from "../../common/enum/infoCategorie";
import { getSchools } from "../../slices/schools";
import { updateFilterData } from "../../utils/updateFilterData";
import statues from "../../common/enum/statues";

function ListInfos() {
  const dispatch = useDispatch();
  const { infos, pagination } = useSelector((state) => state.infos);
  const { schools } = useSelector((state) => state.schools);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState(null);
  const [pages, setPage] = useState(parseInt(pagination?.page) || 1);
  const [perPage, setPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [categori, setCategori] = useState("INFO");
  const [niveau, setNiveau] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [filiere, setFiliere] = useState("");
  const [semestre, setSemestre] = useState("");
  const [departmen, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [status, setStatus] = useState("");

  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [fillieres, setFillieres] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [levels, setLevels] = useState([]);

  useEffect(async () => {
    getData(pages);
    dispatch(getSchools())
      .unwrap()
      .then((data) => {
        updateFilterData2({ datas: data });
      })
      .catch(() => {});
  }, []);

  const getData = (page) => {
    dispatch(
      getInfos({
        params: { perPage, page },
      })
    );
    setPage(page);
  };
  const paginateFront = () => fetchData({ incrementPage: true });
  const paginateBack = () => fetchData({ decrementPage: true });

  const updateFilterData2 = async ({
    uni = null,
    fac = null,
    dep = null,
    fil = null,
    lev = null,
    sem = null,
    sync = false,
    datas = schools,
  }) => {
    try {
      let data = await updateFilterData({
        datas: datas,
        uni,
        fac,
        dep,
        fil,
        lev,
        sem,
        sync,
      });

      setLevels([...(data?.levels ?? [])]);
      setFillieres([...(data?.filieres ?? [])]);
      setFaculties([...(data?.facultes ?? [])]);
      setDepartments([...(data?.departments ?? [])]);
      setUniversities([...(data?.universites ?? [])]);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async ({
    incrementPage = false,
    decrementPage = false,
    range = "",
    category = "",
    param = {},
  } = {}) => {
    let { page } = { error, page: pages };
    page = incrementPage ? page + 1 : page; // Force fetch the next page worth of data when requested
    page = decrementPage ? page - 1 : page; // Force fetch the previous page worth of data when requested
    let params = { perPage, page, ...param };
    if (search != "") {
      params[searchBy] = `regex:${search}`;
    }
    if (category != "") {
      params["category"] = `regex:${category}`;
    } else if (categori != "") {
      params["category"] = `regex:${categori}`;
    }
    if (university != "" && param["university"] == undefined) {
      params["university"] = `regex:${university}`;
    }
    if (faculty != "" && param["faculty"] == undefined) {
      params["faculty"] = `regex:${faculty}`;
    }
    if (departmen != "" && param["department"] == undefined) {
      params["department"] = `regex:${departmen}`;
    }
    if (filiere != "" && param["filiere"] == undefined) {
      params["filiere"] = `regex:${filiere}`;
    }
    if (niveau != "" && param["level"] == undefined) {
      params["level"] = `regex:${niveau}`;
    }
    if (semestre != "" && param["semester"] == undefined) {
      params["semester"] = `regex:${semestre}`;
    }
    if (type != "" && param["type"] == undefined) {
      params["type"] = `regex:${type}`;
    }
    if (status != "" && param["status"] == undefined) {
      params["status"] = `regex:${status}`;
    }
    if (lastDate != "" || range != "") {
      const selectedPeriod = range != "" ? range : lastDate;
      const { start, end } = formatDataByPeriod(selectedPeriod);
      if (end != "") {
        params["createdAt"] = "gt:" + start;
        params["createdAt"] = "lt:" + end;
        // params['createdAt'] = "lt:"+end+"&createdAt=gt:"+start;
      }
    }
    try {
      dispatch(
        getInfos({
          params,
        })
      );
      setPage(page);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Infos
                </h1>
              </div>
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm
                  placeholder="Search Info"
                  onChange={(val) => {
                    setSearch(val);
                  }}
                  onSubmit={() => {
                    fetchData();
                  }}
                />
                <div className="mr-5">
                  <SelectInput
                    option={[
                      { value: "title", name: "Titre" },
                      { value: "description", name: "Description" },
                      { value: "level", name: "Niveau" },
                      { value: "filiere", name: "Filiere" },
                      { value: "faculty", name: "Faculty" },
                      { value: "university", name: "University" },
                    ]}
                    onChange={(val) => {
                      setSearchBy(val);
                    }}
                    placeholder={"Titre"}
                  />
                </div>
                {/* Create user button */}
                <a
                  href="add"
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Create an INFOS</span>
                </a>
              </div>
            </div>

            {/* More actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              <div className="w-48">
                <SelectInput
                  placeholder="Status"
                  option={statues}
                  onChange={(val) => {
                    setStatus(val);
                    fetchData({ param: { status: `regex:${val}` } });
                  }}
                  selectedOption={status}
                />
              </div>
              {/* Left side */}
              <div className="mb-4 sm:mb-0"></div>
              {/* Right side */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-3">
                <SelectInput
                  placeholder="Categorie"
                  option={infoCategorie}
                  onChange={(val) => {
                    setCategori(val);
                    fetchData({ category: val });
                  }}
                  selectedOption={categori}
                />
                {/* Delete button
                <DeleteButton selectedItems={selectedItems} /> */}
                {/* Dropdown */}
                <DateSelect
                  onSelect={(val) => {
                    setLastDate(val);
                    fetchData({ range: val });
                  }}
                />
                {/* Filter button */}
                <DropdownFilter align="right" />
              </div>
            </div>

            {/* list */}
            {/* <div className="grid space-x-5 space-y-5  grid-cols-3 h-screen justify-center items-center"> */}
            <div className="flex items-center justify-start flex-wrap md:mx-2 ">
              {infos.map((info) => {
                // username, userimage,name, title, description, url, publishedat, endat
                return <InfoView key={info._id} info={info} />;
              })}
              ;
            </div>

            <div className="px-6 py-3 mt-10 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex justify-between">
                <div> </div>
                <div className="flex items-center ">
                  <div className="mr-5">perPage </div>
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
        </main>
      </div>
    </div>
  );

  function DropdownFilter({ align }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!dropdown.current) return;
        if (
          !dropdownOpen ||
          dropdown.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setDropdownOpen(false);
      };
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!dropdownOpen || keyCode !== 27) return;
        setDropdownOpen(false);
      };
      document.addEventListener("keydown", keyHandler);
      return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
      <div className="relative inline-flex">
        <button
          ref={trigger}
          className="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          <span className="sr-only">Filter</span>
          <wbr />
          <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
            <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
          </svg>
        </button>
        <Transition
          show={dropdownOpen}
          tag="div"
          className={`origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            align === "right" ? "right-0" : "left-0"
          }`}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div ref={dropdown} className="mb-4 mr-3 ml-3">
            <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
              Filters
            </div>
            <ul className="mb-4">
            <SelectInput
                labelI="University"
                option={universities}
                onChange={(val) => {
                  setUniversity(val);
                  fetchData({ param: { university: `regex:${val}` } });
                }}
                selectedOption={university}
              />
              <SelectInput
                labelI="Faculté"
                option={faculties}
                onChange={(val) => {
                  setFaculty(val);
                  fetchData({ param: { faculty: `regex:${val}` } });
                }}
                selectedOption={faculty}
              />
              <SelectInput
                labelI="Departement"
                option={departments}
                onChange={(val) => {
                  setDepartment(val);
                  fetchData({ param: { department: `regex:${val}` } });
                }}
                selectedOption={departmen}
              />
              <SelectInput
                labelI="Filière"
                option={fillieres}
                onChange={(val) => {
                  setFiliere(val);
                  fetchData({ param: { filiere: `regex:${val}` } });
                }}
                selectedOption={filiere}
              />
              <SelectInput
                labelI="Niveau"
                option={levels}
                onChange={(val) => {
                  setNiveau(val);
                  fetchData({ param: { level: `regex:${val}` } });
                }}
                selectedOption={niveau}
              />

              <SelectInput
                labelI="Semestre"
                option={semester}
                onChange={(val) => {
                  setSemestre(val);
                  fetchData({ param: { semester: `regex:${val}` } });
                }}
                selectedOption={semestre}
              />
              <SelectInput
                labelI="Type"
                option={infos}
                onChange={(val) => {
                  setType(val);
                  fetchData({ param: { type: `regex:${val}` } });
                }}
                selectedOption={type}
              />
            </ul>
            <div className="py-2 px-3 border-t border-slate-200 bg-slate-50">
              <ul className="flex items-center justify-between">
                <li>
                  <button className="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">
                    Clear
                  </button>
                </li>
                <li>
                  <button
                    className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white"
                    onClick={() => setDropdownOpen(false)}
                    onBlur={() => setDropdownOpen(false)}
                  >
                    Apply
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}
export default ListInfos;
