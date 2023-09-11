import React, { useRef } from "react";
import "../style/navigation.css";
import Stack from "@mui/material/Stack";
import { Button } from "@nextui-org/react";
import { Divider } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { Image } from "@nextui-org/react";

const navigationButtonCss = {
  color: "#ffd333",
  fontFamily: "Ruda, sans-serif",
  fontSize: "70%",
  "&:hover": {
    borderBottom: "2px solid #ffd333",
    borderRadius: 0,
  },
  "&:focus": {
    border: "1px solid #ffd333",
    borderRadius: 0,
  },
};

function MainNavigation({ scrollToComponent }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className="backdropDiv">
        <Image
          width={600}
          alt="Under construction"
          src={require("../resources/under.png")}
        />
        </div>
      </Backdrop>
      <Stack
        direction="row"
        spacing={0.05}
        divider={
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ backgroundColor: "#ffd333" }}
            flexItem
          ></Divider>
        }
      >
        <Button
          light
          size="sm"
          onClick={() => scrollToComponent("detailedcv")}
          css={navigationButtonCss}
        >
          Detailed CV
        </Button>
        <Button
          light
          size="sm"
          onClick={handleOpen}
          css={navigationButtonCss}
        >
          Projects
        </Button>
        <Button
          light
          size="sm"
          onClick={handleOpen}
          css={navigationButtonCss}
        >
          Blog
        </Button>
        <Button
          light
          size="sm"
          onClick={() => scrollToComponent("contacts")}
          css={navigationButtonCss}
        >
          Contacts
        </Button>
      </Stack>
    </div>
  );
}

export default MainNavigation;
