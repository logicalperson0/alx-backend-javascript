export default function createEmployeesObject(departmentName, employees) {
  let dep = {};
  dep = {
    [`${departmentName}`]: employees,
  };
  return dep;
}
