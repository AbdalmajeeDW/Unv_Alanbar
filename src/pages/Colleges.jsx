import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchColleges } from "../features/api/colleges";
import CircularProgress from "@mui/material/CircularProgress";
import SelectInput from "../components/SelectInput";
import ContainedButtons from "../components/Button";
import BasicModal from "../components/BasicModal";

export default function Colleges() {
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");
  const dispatch = useDispatch();
  const colleges = useSelector((state) => state.colleges.data);
  const collegesSelected = useSelector(
    (state) => state.colleges.collegesSelected
  );
  const status = useSelector((state) => state.colleges.status);

  const error = useSelector((state) => state.colleges.error);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchColleges());
    }
  }, [status, dispatch]);

  const nameColumn = [
    { key: "name", label: "اسم الكلية", align: "center" },
    { key: "image", label: "صورة الكلية", align: "center" },
    { key: "description", label: "وصف الكلية", align: "center" },
  ];

  const rows = colleges;

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
              <SelectInput name={"الكلية"} items={collegesSelected} />
              <div className="Con_btn">
                <ContainedButtons
                  title="اضافة كلية"
                  action={() => handleOpenModal("اضافة كلية")}
                />
              </div>
            </div>
          </div>
          <Table columns={nameColumn} rows={rows} />
          <BasicModal
            open={open}
            handleClose={handleCloseModal}
            content={modalContent}
          />
        </>
      )}
    </MainLayout>
  );
}
