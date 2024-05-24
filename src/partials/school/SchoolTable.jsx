import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SchoolTableItem from "./SchoolTableItem";

function SchoolTable({ selectedItems }) {
  const { schools } = useSelector((state) => state.schools);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          School <span className="text-slate-400 font-medium"> </span>
        </h2>
      </header>
      {/* <div className="container"> */}
        {/* Table */}
        <div style={{ height: '800px' }} className="overflow-x-auto shadow-md sm:rounded-lg table-wrp block">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      {/* <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} /> */}
                    </label>
                  </div>
                </th>
                
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Logos</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Nom</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Type</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">University</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Country</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">city</div>
                </th>
                
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Town</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Value</div>
                </th>
                
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Abreviation</div>
                </th>
                
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Description</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Statut</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3  w-1/6">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {schools.map((school) => {
                return (
                  <SchoolTableItem
                    key={school?._id}
                    id={school?._id}
                    school={school}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(school?._id)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      {/* </div> */}
    </div>
  );
}

export default SchoolTable;
