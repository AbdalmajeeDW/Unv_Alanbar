import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import SelectInput from "../components/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudent } from "../features/api/students";
import React, { useEffect, useState } from "react";
import {  CircularProgress } from "@mui/material";
import { fetchColleges } from "../features/api/colleges";
import {
  columnsStudents,
  formattedStudents,
} from "../utils/columnsTableStudents";
import { fetchdepartment } from "../features/api/department";
import ContainedButtons from "../components/Button";
import { programs } from "../enums/programs";
import BasicModal from "../components/BasicModal";

export default function Students() {
  const dispatch = useDispatch();
  const [modalContent, setModalContent] = React.useState({
    content:null,
    title:null
  });

  const students = useSelector((state) => state.students.data);
  const status = useSelector((state) => state.students.status);
  const [open, setOpen] = React.useState(false);
  
  const handleOpenModal = (content,title) => {
    
    setModalContent({content:content,title:title});
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  const collegesSelected = useSelector(
    (state) => state.colleges.collegesSelected
  ); const departmentsSelected = useSelector(
    (state) => state.department.departmentsSelected
  );
  const studentsSelected = useSelector(
    (state) => state.students.studentsSelected
  );
  const acceptedDateSelected = useSelector(
    (state) => state.students.acceptedDateSelected
  );
  const error = useSelector((state) => state.students.error);
  const [filters, setFilters] = useState({
    student: '',
    college: '',
    department: '',
    program: '',
    year: ''
  });
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
            <SelectInput  name={"اسم الطالب"} items={studentsSelected} onChange={(value) => setFilters({ ...filters, student: value })} />
              <SelectInput name={"الكلية"} items={collegesSelected} onChange={(value) => setFilters({ ...filters, college: value })} />
              <SelectInput name={"القسم"} items={departmentsSelected} onChange={(value) => setFilters({ ...filters, department: value })} />
              <SelectInput name={"البرنامج"} items={Object.keys(programs)} onChange={(value) => setFilters({ ...filters, program: value })} />
              <SelectInput name={"السنة"} items={acceptedDateSelected} onChange={(value) => setFilters({ ...filters, year: value })} />
              <div className="Con_btn">
                <ContainedButtons
                  title="اضافة طالب"
                  action={() => handleOpenModal(null,'اضافة طالب')}
                />
              </div>
            </div>
          </div>
          <Table columns={nameColumn} rows={rows} type={{titleModalForEdit:'تعديل  الطالب',titleModalForView:'عرض الملف',table:'student'}} />
          <BasicModal
            open={open}
            handleClose={handleCloseModal}
            content={modalContent}
            type={'students'}
          />
        </>
      )}
    </MainLayout>
  );
}
