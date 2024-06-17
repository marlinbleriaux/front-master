import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboarda/WelcomeBanner";
import DashboardAvatars from "../../partials/dashboarda/DashboardAvatars";
import FilterButton from "../../components/DropdownFilter";
import Datepicker from "../../components/Datepicker";
import DashboardUsers from "../../partials/dashboarda/DashboardUsers";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../slices/users";
import { getCountPapers, getPapers } from "../../slices/papers";
import { getInfos } from "../../slices/infos";
import DashboardPapers from "../../partials/dashboarda/DashboardPapers";
// import fillieres from "../../common/enum/fillieres";
// import department from "../../common/enum/department";
// import faculties from "../../common/enum/faculties";
// import levels from "../../common/enum/levels";
// import universities from "../../common/enum/universities";
import semester from "../../common/enum/semester";
import examType from "../../common/enum/examType";
import SelectInput from "../../components/SelectInput";
import { updateFilterData } from "../../utils/updateFilterData";
import { getSchools } from "../../slices/schools";
import levels from "../../common/enum/levels";

function DashboardA() {
  const dispatch = useDispatch();
  const { papers, pagination } = useSelector((state) => state.papers);
  const { users } = useSelector((state) => state.users);
  const { infos } = useSelector((state) => state.infos);
  const { schools } = useSelector((state) => state.schools);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFinishedFa, setIsFinishedFa] = useState(false);
  const [isFinishedDep, setIsFinishedDep] = useState(false);
  const [isFinishedFili, setIsFinishedFili] = useState(false);
  const [isFinishedLev, setIsFinishedLev] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [niveau, setNiveau] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [filiere, setFiliere] = useState("");
  const [semestre, setSemestre] = useState("");
  const [departmen, setDepartment] = useState("");
  const [type, setType] = useState("");

  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [fillieres, setFillieres] = useState([]);

  useEffect(async () => {
    dispatch(getSchools())
      .unwrap()
      .then((data) => {
        updateFilterData2({ datas: data });
      })
      .catch(() => {});
  }, []);

  
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
      getData({ data: data });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async ({
    param = {},
    countField = "filiere",
    field = "filiere",
  } = {}) => {
    let params = { ...param };
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

    try {
      await dispatch(
        getCountPapers({
          params,
          field,
          countField,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async ({ params = {}, field = "", data = {} } = {}) => {
    setIsFinishedFa(false);
    setIsFinishedDep(false);
    setIsFinishedFili(false);
    setIsFinishedLev(false);

    if (faculty == "" && !field.includes('faculty')) {
      await Promise.all(
        [...(data?.facultes ?? [])].map(async (elt) => {
          await fetchData({
            param: { ...params, _count: elt.value, faculty: `regex:${elt.value}` },
            field: elt.value,
            countField: "faculty",
          });
        })
      );
      setIsFinishedFa(true);
    }
    if (departmen == "" && !field.includes('department')) {
      await Promise.all(
        [...(data?.departments ?? [])].map(async (elt) => {
          await fetchData({
            param: { ...params, _count: elt.value, department: `regex:${elt.value}` },
            field: elt.value,
            countField: "department",
          });
        })
      );
      setIsFinishedDep(true);
    }
    if (filiere == "" && !field.includes('filiere')) {
      await Promise.all(
        [...(data?.filieres ?? [])].map(async (elt) => {
          await fetchData({
            param: { ...params, _count: elt.value, filiere: `regex:${elt.value}` },
            field: elt.value,
          });
        })
      );
      setIsFinishedFili(true);
    }
    await Promise.all(
      [...(data?.levels ?? [])].map(async (elt) => {
        await fetchData({
          param: { ...params, _count: elt.value, level: `regex:${elt.value}` },
          field: elt.value,
          countField: "level",
        });
      })
    );
    setIsFinishedLev(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              {/* <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"> */}
                {/* Filter button */}
                {/* <FilterButton align="right" /> */}
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker align="right" /> */}
                {/* Add view button */}
                {/* <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add View</span>
                </button> */}
              {/* </div> */}
            </div>
            {/* <div className="flex items-center justify-start flex-wrap md:mx-2 space-x-5 mb-3"> */}
              {/* <SelectInput
                labelI="University"
                option={universities}
                onChange={(val) => {
                  setUniversity(val);
                  getData({ params: { university: `regex:${val}` }, field: 'university' });
                }}
                selectedOption={university}
              />
              <SelectInput
                labelI="Faculte"
                option={faculties}
                onChange={(val) => {
                  setFaculty(val);
                  getData({ params: { faculty: `regex:${val}` }, field: 'faculty' });
                }}
                selectedOption={faculty}
              />
              <SelectInput
                labelI="Departement"
                option={departments}
                onChange={(val) => {
                  setDepartment(val);
                  getData({ params: { department: `regex:${val}` }, field: 'department' });
                }}
                selectedOption={departmen}
              />
              <SelectInput
                labelI="Filière"
                option={fillieres}
                onChange={(val) => {
                  setFiliere(val);
                  fetchData({ param: { filiere: `regex:${val}` }, field: 'filiere' });
                }}
                selectedOption={filiere}
              />
              <SelectInput
                labelI="Niveau"
                option={levels}
                onChange={(val) => {
                  setNiveau(val);
                  fetchData({ param: { level: `regex:${val}` }, field: 'level' });
                }}
                selectedOption={niveau}
              />
              <SelectInput
                labelI="Semestre"
                option={semester}
                onChange={(val) => {
                  setSemestre(val);
                  getData({ params: { semester: `regex:${val}` }, field: 'semester' });
                }}
                selectedOption={semestre}
              />
              <SelectInput
                labelI="Type"
                option={examType}
                onChange={(val) => {
                  setType(val);
                  getData({ params: { type: `regex:${val}` }, field: 'type' });
                }}
                selectedOption={type}
              /> */}
            {/* </div> */}

            {/* Cards */}
            {/* <div className="grid grid-cols-12 gap-6"> */}
            <div className="flex items-center justify-start flex-wrap md:mx-2">
              {/* Line chart (Acme Advanced) */}
              {/* {isFinishedFa && ( */}
                {/* <DashboardPapers
                  facultyFinish={isFinishedFa}
                  departmntFinish={isFinishedDep}
                  filiereFinish={isFinishedFili}
                  levelFinish={isFinishedLev} */}
                {/* /> */}
              {/* )} */}
              {/* Line chart (Acme Professional) */}
              {/* <DashboardCard03 /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardA;
