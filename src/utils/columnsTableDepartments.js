export const nameColumns = [
    { key: "name", label: "اسم القسم", align: "center" },
    { key: "ItsCollege", label: "الكلية التابع لها", align: "center" },
    { key: "description", label: "وصف القسم", align: "center" },
  ];
  export const formattedDepartments = (departments)=> departments.map((department) => ({
    ...department,
    ItsCollege: `${department.college.name} `,
    
  }));