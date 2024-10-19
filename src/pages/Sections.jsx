import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchdepartment } from "../features/api/department";
import { useEffect } from "react";
import {
  formattedDepartments,
  nameColumns,
} from "../utils/columnsTableDepartments";
import { CircularProgress } from "@mui/material";
import SelectInput from "../components/SelectInput";
import ContainedButtons from "../components/Button";

export default function Sections() {
  const dispatch = useDispatch();
  const department = useSelector((state) => state.department.data);
  const status = useSelector((state) => state.department.status);
  const departmentSelected = useSelector(
    (state) => state.department.departmentsSelected
  );
 

  const error = useSelector((state) => state.department.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchdepartment());
    }
  }, [status, dispatch]);

  const nameColumn = nameColumns;

  const rows = formattedDepartments(department);

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
              <SelectInput name={"القسم"} items={departmentSelected} />
              <div className="Con_btn">
                <ContainedButtons
                  title="اضافة قسم"
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
