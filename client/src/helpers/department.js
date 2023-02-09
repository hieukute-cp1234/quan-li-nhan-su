export const findPMById = (list, id) => {
  const myPM = list?.find((pm) => pm.id === id);
  return myPM?.name || "";
};

export const findPMByName = (list, name) => {
  const myPM = list?.find((pm) => pm.name === name);
  return myPM?.id || "";
};

export const findDepartmentsById = (department, id) => {
  const newDepartment = department.find((department) => department.id === id);
  return newDepartment.name;
};
