import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import { useSelector } from 'react-redux';

function DashboardUsers() {
  // const { papers, pagination } = useSelector((state) => state.papers);
  const { users, pagination } = useSelector((state) => state.users);

  const chartData = {
    labels: users.map((user) => user.createdAt),
    datasets: [
      // Indigo line
      {
        data: users.map((user) => user?.contacts?.length),
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      {
        data: users.map((user) => user?.devices?.length),
        borderColor: tailwindConfig().theme.colors.cyan[500],
        // borderWidth: 2,
        // tension: 0,
        // pointRadius: 0,
        // pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        // clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Plus</h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        {/* <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
        </div> */}
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {users?.length > 0 && (<LineChart data={chartData} width={389} height={250} />)}
      </div>
    </div>
  );
}

export default DashboardUsers;
