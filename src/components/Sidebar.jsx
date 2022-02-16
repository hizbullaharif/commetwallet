import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Sidebar = () => {
  return (
    <>
      <Box className="sidebar">
        <Button>
          <AccountBalanceWalletOutlinedIcon
            className="icons selected-icon"
            fontSize="large"
            sx={{
              boxShadow: 2,
            }}
          />
        </Button>
        <Button>
          <CalendarTodayOutlinedIcon fontSize="large" color="disabled" />
        </Button>
        <Button>
          <MarkChatReadOutlinedIcon fontSize="large" color="disabled" />
        </Button>
        <Button>
          <ArticleOutlinedIcon fontSize="large" color="disabled" />
        </Button>
        <Button>
          <AccountCircleOutlinedIcon fontSize="large" color="disabled" />
        </Button>
      </Box>
    </>
  );
};

export default Sidebar;
