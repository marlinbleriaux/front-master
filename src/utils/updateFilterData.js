export const updateFilterData = async ({
  uni,
  fac,
  dep,
  fil,
  lev,
  sem,
  sync = false,
  datas = []
}) => {
  let tempCodeUeList = new Set();
  let tempLevelsList = new Set();
  let tempFilieresList = new Set();
  let tempDepartementsList = new Set();
  let tempFacultesList = new Set();
  let tempUniversitesList = new Set();

  const other = {
    name: "Autre",
    value: "OTHER",
    abr: "AUTRE",
    translate: "other",
  };
  tempCodeUeList.add(JSON.stringify(other));
  tempLevelsList.add(JSON.stringify(other));
  tempFilieresList.add(JSON.stringify(other));
  tempDepartementsList.add(JSON.stringify(other));
  tempFacultesList.add(JSON.stringify(other));
  tempUniversitesList.add(JSON.stringify(other));

  try {

    const updateUe = (mat) => {
      if (!sem || sem.toLowerCase() === mat?.semester?.toLowerCase()) {
        tempCodeUeList.add(JSON.stringify({
          id: mat?._id,
          name: mat?.name,
          value: mat?.codeUe,
          abr: mat?.codeUe,
          translate: mat?.name,
          level: mat?.level,
          semester: mat?.semester,
          parentId: mat?.parentId,
        }));
      }
    };

    const updateSemester = (mat) => {
      if (!lev || lev.toLowerCase() === mat?.level?.toLowerCase()) {
        updateUe(mat);
      }
    };

    const updateLevel = (departs) => {
      departs?.subjects?.forEach((mat) => {
        if (!fil || fil === departs?.id) {
          updateSemester(mat);
          const leve = getLevelModel(mat?.level);
          if (leve) tempLevelsList.add(JSON.stringify(leve));
        }
      });
    };

    const updateFiliere = (departs) => {
      tempFilieresList.add(JSON.stringify({
        id: departs?._id,
        name: departs?.name,
        value: departs?.value ?? departs?.abr,
        abr: departs?.abr,
        tags: departs?.tags,
        translate: departs?.name,
        parentId: departs?.parentId,
      }));
      updateLevel(departs);
    };

    const updateDept = (departs) => {
      if (departs?.type === "DEPARTMENT") {
        if (!fac || fac === departs?.parentId) {
          tempDepartementsList.add(JSON.stringify({
            id: departs?._id,
            name: departs?.name,
            value: departs?.value ?? departs?.abr,
            abr: departs?.abr,
            translate: departs?.name,
            tags: departs?.tags,
            parentId: departs?.parentId,
          }));
        }
      } else if (departs?.type === "FILIERE") {
        if (!dep || dep === departs?.parentId) {
          updateFiliere(departs);
        }
      } else if (departs?.type === "FACULTY") {
        tempFacultesList.add(JSON.stringify({
          id: departs?._id,
          name: departs?.name,
          value: departs?.value ?? departs?.abr,
          abr: departs?.abr,
          tags: departs?.tags,
          translate: departs?.name,
          parentId: departs?.parentId,
        }));
      }
    };

    const updateFaculty = (data) => {
      tempFacultesList.add(JSON.stringify({
        id: data?._id,
        name: data?.name,
        value: data?.value ?? data?.abr,
        abr: data?.abr,
        translate: data?.name,
        tags: data?.tags,
        parentId: data?.parentId,
        //   image: data?.logos?.length !== 0 ? data?.logos?[0].toJson() : null,
      }));
      data?.departments?.forEach((departs) => {
        if (!fac || fac === "") {
          updateDept(departs);
        } else if (departs?.parentId === fac && fac !== "") {
          updateDept(departs);
        } else if (dep !== null && departs?.type === "FILIERE") {
          updateDept(departs);
        }
      });
    };

    for (const data of datas) {
      if (data?.type === "UNIVERSITY") {
        tempUniversitesList.add(JSON.stringify({
          id: data?._id,
          name: data?.name,
          value: data?.value ?? data?.university,
          abr: data?.abr,
          translate: data?.name,
          tags: data?.tags,
          parentId: data?.parentId,
          // image: data?.logos?.length !== 0 ? data?.logos?[0].toJson() : null
        }));

        if (!uni || uni === null) {
          data?.departments?.forEach((departs) => {
            updateDept(departs);
          });
        } else if ((data?.parentId === uni || data?.id === uni) && uni !== null) {
          data?.departments?.forEach((departs) => {
            updateDept(departs);
          });
        }
      } else if (data?.type === "SCHOOL") {
        if (!uni || uni === null) {
          updateFaculty(data);
        } else if (data?.parentId === uni && uni !== null) {
          updateFaculty(data);
        }
      }
    }

    if (tempLevelsList.size < 2) {
    //   tempLevelsList = tempLevelsList.concat(LEVEL);
    }

    return {
      codeUes: Array.from(tempCodeUeList).map(JSON.parse),
      levels: Array.from(tempLevelsList).map(JSON.parse),
      filieres: Array.from(tempFilieresList).map(JSON.parse),
      departments: Array.from(tempDepartementsList).map(JSON.parse),
      facultes: Array.from(tempFacultesList).map(JSON.parse),
      universites: Array.from(tempUniversitesList).map(JSON.parse),
    };
  } catch (e) {
    console.log(e);
  }
};

export const getLevelModel = (level) => {
  switch (level?.toLowerCase()) {
    case "l1":
      return {
        name: "Licence 1",
        translate: "l1",
        value: "L1",
        abr: "L1",
      };
    case "l2":
      return {
        name: "Licence 2",
        translate: "l2",
        value: "L2",
        abr: "L2",
      };
    case "l3":
      return {
        name: "Licence 3",
        translate: "l3",
        value: "L3",
        abr: "L3",
      };
    case "m1":
      return {
        name: "Master 1",
        translate: "m1",
        value: "M1",
        abr: "M1",
      };
    case "m2":
      return {
        name: "Master 2",
        value: "M2",
        abr: "M2",
        translate: "m2",
      };
  }
  return null;
};
