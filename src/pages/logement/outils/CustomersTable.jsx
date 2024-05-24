import React, { useState, useEffect } from 'react';
import Customer from './CustomersTableItem';

import Image01 from '../../../images/user-40-02.jpg';
import Image02 from '../../../images/user-40-02.jpg';
import Image03 from '../../../images/user-40-03.jpg';
import Image04 from '../../../images/user-40-04.jpg';
import Image05 from '../../../images/user-40-05.jpg';
import Image06 from '../../../images/user-40-06.jpg';
import Image07 from '../../../images/user-40-07.jpg';
import Image08 from '../../../images/user-40-08.jpg';
import Image09 from '../../../images/user-40-09.jpg';
import Image10 from '../../../images/user-40-10.jpg';

function CustomersTable({
  selectedItems
}) {

  const customers = [
    {
      id: '0',
      image: Image01,
      user: 'Patricia Semklo',
      title: 'patricia.semklo@app.com',
      localisation: '🇬🇧 London, UK',
      type: 'ROOM',
      statut: '#123567',
      loyer: '$2,890.66',
      capacity: '-',
      fav: true
    },
    {
      id: '1',
      image: Image02,
      user: 'Dominik Lamakani',
      title: 'dominik.lamakani@gmail.com',
      localisation: '🇩🇪 Dortmund, DE',
      type: 'HOME',
      statut: '#779912',
      loyer: '$14,767.04',
      capacity: '4',
      fav: false
    },
    {
      id: '2',
      image: Image03,
      user: 'Ivan Mesaros',
      title: 'imivanmes@gmail.com',
      localisation: '🇫🇷 Paris, FR',
      type: 'STUDIO',
      statut: '#889924',
      loyer: '$4,996.00',
      capacity: '1',
      fav: true
    },
    {
      id: '3',
      image: Image04,
      user: 'Maria Martinez',
      title: 'martinezhome@gmail.com',
      localisation: '🇮🇹 Bologna, IT',
      type: 'ROOM',
      statut: '#897726',
      loyer: '$3,220.66',
      capacity: '2',
      fav: false
    },
    {
      id: '4',
      image: Image05,
      user: 'Vicky Jung',
      title: 'itsvicky@contact.com',
      localisation: '🇬🇧 London, UK',
      type: 'ROOM',
      statut: '#123567',
      loyer: '$2,890.66',
      capacity: '-',
      fav: true
    },
    {
      id: '5',
      image: Image06,
      user: 'Tisho Yanchev',
      title: 'tisho.y@kurlytech.com',
      localisation: '🇬🇧 London, UK',
      type: 'HOME',
      statut: '#896644',
      loyer: '$1,649.99',
      capacity: '1',
      fav: true
    },
    {
      id: '6',
      image: Image07,
      user: 'James Cameron',
      title: 'james.ceo@james.tech',
      localisation: '🇫🇷 Marseille, FR',
      type: 'STUDIO',
      statut: '#136988',
      loyer: '$3,569.87',
      capacity: '2',
      fav: true
    },
    {
      id: '7',
      image: Image08,
      user: 'Haruki Masuno',
      title: 'haruki@supermail.jp',
      localisation: '🇯🇵 Tokio, JP',
      type: 'STUDIO',
      statut: '#442206',
      loyer: '$19,246.07',
      capacity: '6',
      fav: false
    },
    {
      id: '8',
      image: Image09,
      user: 'Joe Huang',
      title: 'joehuang@hotmail.com',
      localisation: '🇨🇳 Shanghai, CN',
      type: 'HOME',
      statut: '#764321',
      loyer: '$12,276.92',
      capacity: '-',
      fav: true
    },
    {
      id: '9',
      image: Image10,
      user: 'Carolyn McNeail',
      title: 'carolynlove@gmail.com',
      localisation: '🇮🇹 Milan, IT',
      type: 'ROOM',
      statut: '#908764',
      loyer: '$1,289.97',
      capacity: '2',
      fav: false
    }
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(customers);
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
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">All Logement <span className="text-slate-400 font-medium">248</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <span className="sr-only">Favourite</span>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">User</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Localisation</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Type</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Statut</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Loyer</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Capacity</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Menu</span>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Delete</span>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {
                list.map(customer => {
                  return (
                    <Customer
                      key={customer.id}
                      id={customer.id}
                      image={customer.image}
                      user={customer.user}
                      title={customer.title}
                      localisation={customer.localisation}
                      type={customer.type}
                      statut={customer.statut}
                      loyer={customer.loyer}
                      capacity={customer.capacity}
                      fav={customer.fav}
                      handleClick={handleClick}
                      isChecked={isCheck.includes(customer.id)}
                    />
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default CustomersTable;
