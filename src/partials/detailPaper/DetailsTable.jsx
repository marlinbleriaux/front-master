import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import DetailsTableItem from './DetailsTableItem';

function DetailsTable({
  selectedItems
}) {

  const {users} = useSelector((state) => state.papers);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    //setList(invoices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map(li => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      {/* <div className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">Users <span className="text-slate-400 font-medium"> </span></h2>
      </div> */}
      <div>
        <div className="overflow-x-auto">
          <div className="w-full">
            {/* Table header */}
            <div className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div className="flex items-center">
                  <label className="inline-flex">
                    <span className="sr-only">Select all</span>
                    {/* <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} /> */}
                  </label>
                </div>
              </div>
              
            </div>
            {/* Table body */}
            <div className="text-sm divide-y divide-slate-200">
              {users.map((user) => (
                <DetailsTableItem
                  key={user._id}
                  id={user._id}
                  user={user}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(user.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTable;
