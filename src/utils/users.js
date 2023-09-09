const STORAGE_NAME = "employeesData";
export const getUsersFromLocalstorage = () => {
  let employees = localStorage.getItem(STORAGE_NAME);
  try {
    employees = JSON.parse(employees);
    return Array.isArray(employees) ? employees : [];
  } catch (er) {
    return [];
  }
};

export const addEmpolyee = (emp)=>{
    let employee = getUsersFromLocalstorage();
    employee.push(emp);
    localStorage.setItem(STORAGE_NAME,JSON.stringify(employee));
    return employee ;
}

export default getUsersFromLocalstorage;
