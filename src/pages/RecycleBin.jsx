import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";

export default function RecycleBin() {
  const nameColumn = [
    { key: "sectoin", label: "اسم القسم", align: "center" },
    { key: "ItsCollege", label: "الكلية التابع لها", align: "center" },
    { key: "disSection", label: "وصف القسم", align: "center" },
  ];

  const rows = [
    {
      sectoin: "الجراحة",
      ItsCollege: "الطب",
      disSection:
        "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
    },
    {
      sectoin: "الجراحة",
      ItsCollege: "الطب",
      disSection:
        "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
    },
    {
      sectoin: "الجراحة",
      ItsCollege: "الطب",
      disSection:
        "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
    },
    {
      sectoin: "الجراحة",
      ItsCollege: "الطب",
      disSection:
        "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
    },
    {
      sectoin: "الجراحة",
      ItsCollege: "الطب",
      disSection:
        "إنطلاقا من مبدأ تطوير الواقع العلمي والأداري والأكاديمي في جامعة الأنبار..",
    },
  ];

  return (
    <MainLayout>
      <div className="container">{/* <SelectInput /> */}</div>

      

      <Table columns={nameColumn} rows={rows} />
    </MainLayout>
  );
}
