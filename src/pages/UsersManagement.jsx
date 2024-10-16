import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import SelectInput from "../components/SelectInput";

export default function UserManagment() {
  const nameColumn = [
    { key: "userName", label: "اسم المستخدم", align: "center" },
    { key: "ValidityType", label: "نوع الصلاحية", align: "center" },
    { key: "ScientificTitle", label: "اللقب العلمي", align: "center" },
    { key: "Email", label: "البريد الالكتروني", align: "center" },
    { key: "study", label: "الدراسة", align: "center" },
  ];

  const rows = [
    {
      userName: "حسن هشام زيد الايوبي",
      ValidityType: "مستخدم",
      ScientificTitle: "مدرس",
      Email: "drrifaat1974@uoanbar.edu.iq",
      study: "دكتوراه ",
     
    },
    {
      userName: "حسن هشام زيد الايوبي",
      ValidityType: "مستخدم",
      ScientificTitle: "مدرس",
      Email: "drrifaat1974@uoanbar.edu.iq",
      study: "دكتوراه ",
     
    },
    {
      userName: "حسن هشام زيد الايوبي",
      ValidityType: "مستخدم",
      ScientificTitle: "مدرس",
      Email: "drrifaat1974@uoanbar.edu.iq",
      study: "دكتوراه ",
     
    },
    {
      userName: "حسن هشام زيد الايوبي",
      ValidityType: "مستخدم",
      ScientificTitle: "مدرس",
      Email: "drrifaat1974@uoanbar.edu.iq",
      study: "دكتوراه ",
     
    },

    
  
  ];

  return (
    <MainLayout>
      <div className="container">
        {/* <SelectInput /> */}
      </div>
      <Table columns={nameColumn} rows={rows} />
    </MainLayout>
  );
}
