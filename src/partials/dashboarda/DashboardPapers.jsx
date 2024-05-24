import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart";
import Icon from "../../images/icon-01.svg";
import EditMenu from "../../components/DropdownEditMenu";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import { useSelector } from "react-redux";
import fillieres from "../../common/enum/fillieres";
import BarChart from "../../charts/BarChart";
import department from "../../common/enum/department";
import faculties from "../../common/enum/faculties";
import levels from "../../common/enum/levels";

function DashboardPapers({ filiereFinish = false, facultyFinish = false, levelFinish = false, departmntFinish = false }) {
  const { count, pagination, papers } = useSelector((state) => state.papers);
  const { filiere, faculty, level } = count;
  const departmnt = count?.department;

  const chartDataFaculty = {
    labels: Object.keys(faculty).map((key) => key),
    datasets: [
      {
        data: Object.keys(faculty).map((key) => faculty[key]),
        fill: true,
        title: "Total epreuves par Facultes",
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.cyan[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        clip: 20,
      },
    ],
  };
  const chartDataLevel = {
    labels: Object.keys(level).map((key) => key),
    datasets: [
      {
        data: Object.keys(level).map((key) => level[key]),
        fill: true,
        title: "Total epreuves par Niveau",
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.cyan[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        clip: 20,
      },
    ],
  };
  const chartDataFiliere = {
    labels: Object.keys(filiere).map((key) => key),
    datasets: [
      {
        data: Object.keys(filiere).map((key) => filiere[key]),
        fill: true,
        title: "Total epreuves par Filieres",
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.cyan[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        clip: 20,
      },
    ],
  };
  const chartDataDepartement = {
    labels: Object.keys(departmnt).map((key) => key.substring(0, 4)),
    datasets: [
      {
        data: Object.keys(departmnt).map((key) => departmnt[key]),
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.cyan[500],
        borderWidth: 2,
        title: "Total epreuves par Departements",
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        clip: 20,
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
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Graphe</h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        {/* <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
        </div> */}
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {faculty && facultyFinish && (
          <BarChart data={chartDataFaculty} width={1200} height={250} />
        )}
      </div>
      <div className="grow">
        {departmnt && departmntFinish && (
          <BarChart data={chartDataDepartement} width={1200} height={250} />
        )}
      </div>
      <div className="grow">
        {filiere && filiereFinish && <BarChart data={chartDataFiliere} width={1200} height={250} />}
      </div>
      <div className="grow">
        {level && levelFinish && (
          <BarChart data={chartDataLevel} width={1200} height={250} />
        )}
      </div>
        {/* {departmnt && (<LineChart data={chartDataDepartement} width={389} height={250} />)} */}
    </div>
  );
}

export default DashboardPapers;
