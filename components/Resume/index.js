import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Intro from "../Intro";
import Social from "../Social";
import Block from "../Block";
import Education from "../Education";
import Projects from "../Projects";
const Index = React.forwardRef((props, ref) => {
  const paperDim = { width: "8.5in", minHeight: "11in", m: "auto" };
  const paperDim2 = { width: "21cm", minHeight: "29.7cm", m: "auto" };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Paper elevation={24}>
        {/* 794 /1123*/}

        <Box sx={paperDim}>
          <Box ref={ref} sx={paperDim}>
            <Intro />
            <Social />
            <Block />
            <Education />
            <Projects />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
});
export default Index;
