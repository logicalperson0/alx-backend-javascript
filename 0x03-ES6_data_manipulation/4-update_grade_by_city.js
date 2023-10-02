export default function updateStudentGradeByCity(Students, city, newGrades) {
  function chkcity(value) {
    return value.location === city;
  }

  function fungra(value) {
    const filgra = newGrades.filter((grades) => grades.studentId === value.id);

    if (filgra.length > 0) {
      return ({ ...value, grade: filgra[0].grade });
    }
    return ({ ...value, grade: 'N/A' });
  }

  const cities = Students.filter(chkcity);

  return cities.map(fungra);
}
