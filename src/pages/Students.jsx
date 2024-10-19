import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import SelectInput from "../components/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudent } from "../features/api/students";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { fetchColleges } from "../features/api/colleges";
import {
  columnsStudents,
  formattedStudents,
} from "../utils/columnsTableStudents";
import { fetchdepartment } from "../features/api/department";
import ContainedButtons from "../components/Button";

export default function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);
  const status = useSelector((state) => state.students.status);
  const collegesSelected = useSelector(
    (state) => state.colleges.collegesSelected
  ); const departmentsSelected = useSelector(
    (state) => state.department.departmentsSelected
  );
  const studentsSelected = useSelector(
    (state) => state.students.studentsSelected
  );

  const error = useSelector((state) => state.students.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudent());
      dispatch(fetchColleges());
      dispatch(fetchdepartment());
    }
  }, [status, dispatch]);

  const nameColumn = columnsStudents;

  const rows = formattedStudents(students);

  return (
    <MainLayout>
      {status === "loading" ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="select">
              <SelectInput name={"اسم الطالب"} items={studentsSelected} />
              <SelectInput name={"الكلية"} items={collegesSelected} />
              <SelectInput name={"القسم"} items={departmentsSelected}/>
              {/* <SelectInput name={"البرنامج"} items={rows}/>
              <SelectInput name={"السنة"} items={rows}/> */}
              <div className="Con_btn">
                <ContainedButtons
                  title="اضافة طالب"
                />
              </div>
            </div>
          </div>
          <Table columns={nameColumn} rows={rows} />
        </>
      )}
    </MainLayout>
  );
}
