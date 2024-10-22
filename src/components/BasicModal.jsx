import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, TextField } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import SelectInput from "./SelectInput";
import { programs } from "../enums/programs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, content, type }) {
  console.log(content);

  const [formData, setFormData] = React.useState({
    firstName: content?.content?.first_name || "",
    secondName: content?.content?.second_name || "",
    thirdName: content?.content?.third_name || "",
    fourthName: content?.content?.fourth_name || "",
    motherName: content?.content?.mother_name || "",
    birthday: content?.content?.birthday || "",
    email: content?.content?.email || "",
    phone: content?.content?.phone || "",
    nationality: content?.content?.nationality || "",
    country: content?.content?.country || "",
    gender:
      content?.content?.gender !== undefined &&
      content?.content?.gender !== null
        ? content.content.gender
        : "",
    studyProgram:
      content?.content?.study_program !== undefined &&
      content?.content?.study_program !== null
        ? content.content.study_program
        : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
       
       
       
       <div className="titleModal">
          <h2>{content?.title}</h2>
          <IoCloseSharp className="close" onClick={handleClose} />
        </div>
        <Divider aria-hidden="true" />
       {type != 'colleges'&&<>

        <h4 className="sectionInformationStudent">معلومات الطالب</h4>
        <div className="ModalTopSection">
          <TextField
            label="الاسم الاول"
            name="firstName"
            className="textField"
            onChange={handleChange}
            value={formData.firstName}
          />
          <TextField
            label="الاسم الثاني"
            name="secondName"
            className="textField"
            onChange={handleChange}
            value={formData.secondName}
          />
          <TextField
            label="الاسم الثالث"
            name="thirdName"
            className="textField"
            onChange={handleChange}
            value={formData.thirdName}
          />
          <TextField
            label="الاسم الرابع"
            name="fourthName"
            className="textField"
            onChange={handleChange}
            value={formData.fourthName}
          />
          <TextField
            label="اسم الام"
            name="motherName"
            className="textField"
            onChange={handleChange}
            value={formData.motherName}
          />
          <TextField
            type="date"
            label="تاريخ الميلاد"
            name="birthday"
            className="textField"
            onChange={handleChange}
            value={formData.birthday}
          />
          <TextField
            label="الايميل"
            name="email"
            className="textField"
            onChange={handleChange}
            value={formData.email}
          />
          <TextField
            label="رقم الموبايل"
            name="phone"
            className="textField"
            onChange={handleChange}
            value={formData.phone}
          />
          <TextField
            label="الجنسية"
            name="nationality"
            className="textField"
            onChange={handleChange}
            value={formData.nationality}
          />
          <TextField
            label="المحافظة"
            name="country"
            className="textField"
            onChange={handleChange}
            value={formData.country}
          />
          <TextField
            label="الجنس"
            name="gender"
            className="textField"
            onChange={handleChange}
            value={formData.gender}
          />
        </div>

        <h4 className="sectionInformationStudent">معلومات الدراسة</h4>
        <div className="ModalBottomSection">
    
          <SelectInput
            type={"modal"}
            name={"البرنامج"}
            items={Object.keys(programs)}
            onChange={(value) => value}
          />
        </div>
       </> 
        }
       
      </Box>
    </Modal>
  );
}
