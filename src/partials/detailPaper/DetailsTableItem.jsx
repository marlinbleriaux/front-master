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
          <div className="font-semibold text-left">Id : {props.user._id}</div>
          
        </div>
        <br/>

        
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Code : {props.user.code}</div>
    
        </div>
        <br/>

        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Ue : {props.user.ue}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">type : {props.user.type}</div>
          
        </div>
        <br/>
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">teacher : {props.user.teacher}</div>
          
        </div> 
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">level : {props.user.level}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">faculty : {props.user.faculty}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">semester : {props.user.semester}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">filiere : {props.user.filiere}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">year : {props.user.year}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">status : {props.user.status}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Nom du document : {props.user?.assets?.filename}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Créé le  : {props.user.createdAt}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">Dernière modification : {props.user.updatedAt}</div>
          
        </div>
        <br/>
        
        <div className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-semibold text-left">description : {props.user.description}</div>
          
        </div>
        <br/>
        <br/>
  
      
      
    </div>
    

  );
}

export default DetailsTableItem;
