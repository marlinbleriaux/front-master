import React from "react";

function DetailButton({ selectedItems }) {
  return (
    <div className={selectedItems && "hidden"}>
      <div className="flex items-center">
        <div className="hidden xl:block text-sm italic mr-2 whitespace-nowrap">
          <span>{selectedItems}</span> items selected
        </div>
        <button className="btn bg-white border-slate-200 hover:border-slate-300 text-rose-500 hover:text-rose-600">
          Details
        </button>
      </div>
    </div>
  );
}
s;
export default DetailButton;
