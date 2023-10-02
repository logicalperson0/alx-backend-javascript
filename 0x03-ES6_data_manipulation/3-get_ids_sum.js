export default function getStudentIdsSum(students) {
  const ids = students.reduce((accumulator, currentValue) => accumulator + currentValue.id,
    0);

  return ids;
}
