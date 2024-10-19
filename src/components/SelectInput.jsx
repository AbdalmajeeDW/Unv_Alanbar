import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MultipleSelectPlaceholder({ name, items }) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (e) => {
    setPersonName(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, mt: 3 }}>
        <Select
          className="selectInput"
          displayEmpty
          value={personName}
          onChange={(e) => handleChange(e)}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <>{name}</>;
            }

            return personName;
          }}
        >
          {items.map((item, i) => (
            <MenuItem key={i} value={item} dir="rtl">
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
