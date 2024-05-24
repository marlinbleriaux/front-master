import React from 'react';

function DetailsTableItem(props) {

  const totalColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'text-emerald-500';
      case 'Due':
        return 'text-amber-500';
      case 'Overdue':
        return 'text-rose-500';
      default:
        return 'text-slate-500';
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-100 text-emerald-600';
      case 'Due':
        return 'bg-amber-100 text-amber-600';
      case 'Overdue':
        return 'bg-rose-100 text-rose-500';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  

  return (
    <div className="">
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left text-5xl font-extrabold text-slate-900"> {props.user.firstName} {props.user.lastName}</div>
          
        </div>
        <br/>

        
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Telephone : {props.user.phoneNumber}</div>
    
        </div>
        <br/>

        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Email : {props.user.email}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Type : {props.user.type}</div>
          
        </div>
        <br/>
        {/* <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Role : {props.user.role.type}</div>
          
        </div> */}
        <br/>
        <br/>
  
      
      
    </div>
    

  );
}

export default DetailsTableItem;
