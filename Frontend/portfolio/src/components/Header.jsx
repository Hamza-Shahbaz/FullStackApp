import React from "react";
import { Box, useTheme, Typography } from "@mui/material";


const Header = ({ title, subTitle, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight={"bold"}
        sx={{mb:"5px"}}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[300]}
      >
        {subTitle}{subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
