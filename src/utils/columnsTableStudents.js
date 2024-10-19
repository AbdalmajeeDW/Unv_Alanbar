export const formattedStudents = (students)=> students.map((student) => ({
    ...student,
    fullName: `${student.first_name} ${student.second_name} ${student.third_name} ${student.fourth_name}`,
    collgesName: student.college.name,
    departmentName: student.department.name,
  }));
  export const columnsStudents = [
    { key: "fullName", label: "اسم الطالب الرباعي", align: "center" },
    { key: "collgesName", label: "الكلية", align: "center" },
    { key: "departmentName", label: "القسم", align: "center" },
    { key: "address", label: "البرنامج", align: "center" },
    { key: "accepted_date", label: "العام الدراسي للقبول", align: "center" },
  ];