/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
  export const cpp: Subjects.Cpp = new Subjects.Cpp();
  export const java: Subjects.Java = new Subjects.Java();
  export const react: Subjects.React = new Subjects.React();
  export const cTeacher: Subjects.Teacher = {
    firstName: 'Joe',
    lastName: 'Doe',
    experienceTeachingC: 10,
  };

  console.log('C++');
  cpp.setter = cTeacher;
  console.log(cpp.getRequirements()); // Log requirements for Cpp
  console.log(cpp.getAvailableTeacher()); // Log available teacher for Cpp

  // For Java subject
  console.log('Java');
  java.setter = cTeacher; //  Set the teacher for Java
  console.log(java.getRequirements()); // Log requirements for Java
  console.log(java.getAvailableTeacher()); // Log available teacher for Java

  // For React subject
  console.log('React');
  react.setter = cTeacher; // Set the teacher for React
  console.log(react.getRequirements()); // Log requirements for React
  console.log(react.getAvailableTeacher()); // Log available teacher for React
}
