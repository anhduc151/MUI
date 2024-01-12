import React from "react";
import Button from "@mui/material/Button";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// add styled custom hover element
import { styled } from "@mui/material/styles";
import CartInfo from "../cart/components/CartInfo";
import ProductList from "../cart/components/ProductList";

const Home = () => {
//     const [value, setValue] = React.useState("female");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const Div = styled("div")({
//     padding: "20px 20%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     minHeight: "100vh",

//     "&:hover": {
//       backgroundColor: "#e0e0e0",
//     },
//   });

  const StyleButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#000",
      color: "white",
    },
  });
  return (
    <div>
      <div>
        {/* <StyleButton
          variant="contained"
          sx={{ marginTop: "5px", width: "200px", background: "blue" }}
        >
          Add
        </StyleButton> */}
        {/* <AccessAlarm sx={{ fontSize: "100px", color: "pink" }} /> */}
        {/* <ThreeDRotation /> */}

        {/* <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio sx={{ fontSize: "30px", color: "red" }} />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl> */}

        <ProductList />
        <CartInfo />
      </div>
    </div>
  );
};

export default Home;
