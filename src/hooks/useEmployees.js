import { getUsersFromLocalstorage, STORAGE_NAME } from "../utils/users";


export const useEmployees = (id = null) => {
  let employees = getUsersFromLocalstorage();
  if (id) {
    let item = employees.find((item) => item.id === id);
    return item ? item : null;
  }
  return employees;
};

