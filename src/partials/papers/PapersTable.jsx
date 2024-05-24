import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PapersTableItem from "./PapersTableItem";

function PapersTable({ selectedItems }) {
  const { papers } = useSelector((state) => state.papers);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

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
    <div className="flex flex-col h-full">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          Papers <span className="text-slate-400 font-medium"> </span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="">
          {/* <div className="grid grid-cols-3 gap-4 p-4"> */}
        <div className="flex items-center justify-start flex-wrap md:mx-2 ">
            {papers.map((paper) => {
              return paper != undefined && paper != null ? (
                <div
                  key={paper._id}
                  style={{ width: 180 }} 
                  className="bg-white shadow-lg rounded-sm border mr-3 mb-3 border-slate-200 relative cursor-progress"
                >
                  <PapersTableItem
                    id={paper._id}
                    paper={paper}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(paper.id)}
                  />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PapersTable;
