interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to work';
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

export default function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();  
}

export default function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return employee instanceof Director;
}

export default function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}
