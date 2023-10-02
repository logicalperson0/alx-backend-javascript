export default function getStudentsByLocation(students, city) {
  function chkcity(value) {
    return value.location === city;
  }

  const cities = students.filter(chkcity);

  return cities;
}
