import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {  TablePagination } from "@mui/material";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdOutlinePreview } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

export default function BasicTable({ columns, rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container">
      <TableContainer aria-rowcount={1} component={Paper} dir="rtl">
        <Table sx={{ minWidth: 650 }} cou aria-label="simple table">
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
                      {row[col.key]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="actionsTable">
                      <BiSolidTrashAlt color="red" className="trashIcon" />
                      <MdOutlinePreview color="#17A2B8" className="viewIcon" />
                      <RiEdit2Fill color="#17A2B8" className="editIcon" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        color="red"
        dir="rtl"
        page={page}
        rowsPerPageOptions={[10, 25, 100, 200]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}