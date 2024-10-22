import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, TablePagination } from "@mui/material";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdOutlinePreview } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import BasicModal from "./BasicModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentFromAPI } from "../features/api/students";
import { deleteCollegeFromAPI } from "../features/api/colleges";
import { SuccessAllert } from "./Allerts";
import ConfirmModal from "./ConfirmModal";
import { BsImages } from "react-icons/bs";

export default function BasicTable({ columns, rows, type }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    content: null,
    title: null,
  });
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isConfirmDelete, setIsConfirmDelete] = React.useState({
    itemId: null,
    type: null,
  });

  const dispatch = useDispatch();
  const status = useSelector((state) => state.students.status);

  const handleDeleteItem = () => {
    if (isConfirmDelete.type === "student") {
      dispatch(deleteStudentFromAPI(isConfirmDelete.itemId));
      if (status === "succeeded") {
        alert("test");
      }
    } else if (isConfirmDelete.type === "college") {
      dispatch(deleteCollegeFromAPI(isConfirmDelete.itemId));
    }
  };
  const openConfirmDelete = (item, type) => {
    setIsConfirmOpen(true);
    setIsConfirmDelete({ itemId: item, type: type });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const closeConfirmDelete = () => {
    setIsConfirmOpen(false);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = (content, title) => {
    setModalContent({ content: content, title: title });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <TableContainer
        sx={{ marginTop: 5 }}
        aria-rowcount={1}
        component={Paper}
        dir="rtl"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col, i) => (
                <TableCell align={col.align} key={i}>
                  {col.label}
                </TableCell>
              ))}
              <TableCell align="center">الإجراءات</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <TableCell
                      align={col.align}
                      key={colIndex}
                      component="td"
                      scope="row"
                    >
                      {col.key === "image" ? (
                        row[col.key] ? (
                          <img
                            width={75}
                            style={{ borderRadius: "5px" }}
                            src={`https://anbar-api.akwad4it.com/${
                              row[col.key]
                            }`}
                            alt="Image"
                          />
                        ) : (
                          <BsImages size={40} color="#17A2B8" />
                        )
                      ) : (
                        row[col.key]
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="actionsTable">
                      <BiSolidTrashAlt
                        color="red"
                        className="trashIcon"
                        onClick={() => openConfirmDelete(row.id, type.table)}
                      />
                      <MdOutlinePreview
                        color="#17A2B8"
                        className="viewIcon"
                        onClick={() =>
                          handleOpenModal(row, type.titleModalForView)
                        }
                      />
                      <RiEdit2Fill
                        color="#17A2B8"
                        className="editIcon"
                        onClick={() =>
                          handleOpenModal(row, type.titleModalForEdit)
                        }
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        dir="rtl"
        page={page}
        rowsPerPageOptions={[5, 10, 25, 100]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ConfirmModal
        open={isConfirmOpen}
        handleClose={closeConfirmDelete}
        onConfirm={handleDeleteItem}
        title="تأكيد الحذف"
        content="هل أنت متأكد من أنك تريد حذف هذا السطر؟"
      />
      {modalContent.content && modalContent.title != null && (
        <BasicModal
          open={open}
          handleClose={handleCloseModal}
          content={modalContent}
        />
      )}
    </div>
  );
}
