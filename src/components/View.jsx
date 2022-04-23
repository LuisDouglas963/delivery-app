import Box from "@mui/material/Box";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const View = ({ children }) => {
  return (
    <div>
      <Header />
      <Box
      component="main"
        sx={{
          padding: (theme) => theme.spacing(2),
          minHeight: 700,
        }}
      >
        {children}
      </Box>
      <Footer />
    </div>
  );
};
