import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const [age, setAge] = React.useState("");
  const [items, setItems] = React.useState(props.items);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 250 }}>
      <InputLabel >{props.label}</InputLabel>
      <Select
        dir="rtl"
        
        value={age}
        label="الطلبة"
        onChange={handleChange}
      >
        {items.map((e) => (
          <MenuItem value={10}>{e.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
