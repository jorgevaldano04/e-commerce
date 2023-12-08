import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  StackedBarChart,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius:4,
        borderBottomLeftRadius:4,
      }}
    >
      <Container>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          HOT
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Talenta Komputer
        </Typography>

        <Box flexGrow={1} />

        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ fontSize: "25px", color: "#fff" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
        </div>
        <TwitterIcon
          sx={{
            fontSize: "23px",
            color: "#fff",
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: "23px",
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "23px",
            color: "#fff",
          }}
        />
       
       </Stack>
       </Container>
    </Box>
  );
};

export default Header1;
