interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
  }
  
  const persons: Student = {
    id: 1,
    name: 'Nagu',
    email: 'nagu@example.com',
    age: 20
  };
  
  type UpdatableStudentKeys = keyof Student;
  
  function updateStudentInfo<T extends Partial<Pick<Student, UpdatableStudentKeys>>>(
    student: Student,
    updates: T
  ): Student {
    return { ...student, ...updates };
  }
  
  const handleUpdate = (): Student => {
    const update: Partial<Student> = { name: 'nagu', email: 'nagu@example.com' };
    const updatedStudent = updateStudentInfo(persons, update);
    console.log(updatedStudent);
    return updatedStudent;
  };
  
  const printUpdatedStudent = (): void => {
    const updatedStudent = handleUpdate();
    console.log(`Updated Student: Name - ${updatedStudent.name}, Email - ${updatedStudent.email}`);
  };
  
  printUpdatedStudent();
  