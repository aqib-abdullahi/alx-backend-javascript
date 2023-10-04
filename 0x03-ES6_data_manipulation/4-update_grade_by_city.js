import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(students = getListStudents, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grades) => grades.studentId === student.id);
      if (studentGrade) {
        return {
          ...student,
          grade: studentGrade.grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
}
