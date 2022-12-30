import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

function BottomNav(props: { nav: string }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(props.nav);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigateHome = () => {
    navigate("/home");
  };
  const navigateTransact = () => {
    navigate("/transact");
  };
  const navigateAccount = () => {
    navigate("/account");
  };
  return (
    <Box sx={{ pb: 10 }}>
      <BottomNavigation
        showLabels
        // sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="HOME"
          value="home"
          icon={<AccountBalanceRoundedIcon />}
          onClick={navigateHome}
        />
        <BottomNavigationAction
          label="TRANSACT"
          value="transact"
          icon={<CompareArrowsRoundedIcon />}
          onClick={navigateTransact}
        />
        <BottomNavigationAction
          label="ACCOUNT"
          value="account"
          icon={<AccountBalanceWalletRoundedIcon />}
          onClick={navigateAccount}
        />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNav;
