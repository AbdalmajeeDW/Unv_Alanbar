import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MultipleSelectPlaceholder({ name, items, onChange,type }) {
  console.log(items);
  
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
    
  };
  const style = type === 'modal'?{
    
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 0,
    marginTop: '0px'
  }:{
    height:'30px',
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 0,
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, mt: 3 ,...(type === 'modal' && { margin: '0 !important' })}}>
        <Select
          style={style}
          displayEmpty
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <>{name}</>;
            }
            return selectedValue 
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
