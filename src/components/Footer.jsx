import Box from "@mui/material/Box";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        minHeight: 80,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="p"
        sx={{
          margin: 0,
          color: (theme) =>
            theme.palette.getContrastText(theme.palette.grey[900]),
        }}
      >
        GitHub
      </Box>
    </Box>
  );
};
