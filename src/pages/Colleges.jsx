import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import SelectInput from "../components/SelectInput";

export default function Colleges() {
  const nameColumn = [
    { key: "colleges", label: "اسم الكلية", align: "center" },
    { key: "imageColleges", label: "صورة الكلية", align: "center" },
    { key: "disColleges", label: "وصف الكلية", align: "center" },
  ];

  const rows = [
    {
        colleges: "التربية للعلوم الانسانية",
        imageColleges: ".",
        disColleges: "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
     
    },
    {
        colleges: "التربية للعلوم الانسانية",
        imageColleges: ".",
        disColleges: "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
     
    },
    {
        colleges: "التربية للعلوم الانسانية",
        imageColleges: ".",
        disColleges: "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
     
    },
    {
        colleges: "التربية للعلوم الانسانية",
        imageColleges: ".",
        disColleges: "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
     
    },
    {
        colleges: "التربية للعلوم الانسانية",
        imageColleges: ".",
        disColleges: "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
     
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
