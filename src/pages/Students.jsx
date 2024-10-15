import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import SelectInput from "../components/SelectInput";

export default function Students() {
  const nameColumn = [
    { key: "name", label: "اسم الطالب الرباعي" ,align:'center'},
    { key: "colleges", label: "الكلية" ,align:'center'},
    { key: "section", label: "القسم" ,align:'center'},
    { key: "program", label: "البرنامج" ,align:'center'},
    { key: "date", label: "العام الدراسي للقبول" ,align:'center' },
  ];

  const rows = [
    {
      name: "جاسم حسن خالد الخالد",
      colleges: "المعلوماتية",
      section: "تقنيات حاسوب",
      program: "دبلوم",
      date: "2024",
    },
    {
      name: "جاسم حسن خالد الخالد",
      colleges: "المعلوماتية",
      section: "تقنيات حاسوب",
      program: "دبلوم",
      date: "2024",
    }, {
      name: "جاسم حسن خالد الخالد",
      colleges: "المعلوماتية",
      section: "تقنيات حاسوب",
      program: "دبلوم",
      date: "2024",
    },
  

  ];

  return (
    <MainLayout>
      <div className="container">

      {/* <SelectInput items={[{name:'المعلوماتية'},{name:'المعلوماتية'}]}label={'اسم الطالب الرباعي'} /> */}
      </div>
      <Table columns={nameColumn} rows={rows} />
   
    </MainLayout>
  );
}