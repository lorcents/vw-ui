import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import "../App.css";

export default function PaymentForm(props: { title: string }) {
  const [isWithdraw, setIsWithdraw] = useState(false);

  useEffect(() => {
    if (props.title === "withdraw") {
      setIsWithdraw(true);
    }
  }, [props]);

  const currencies = [
    {
      value: "Equity",
      label: "Equity Bank Kenya",
    },
    {
      value: "KCB",
      label: "KCB",
    },
    {
      value: "NCBA",
      label: "NCBA",
    },
    {
      value: "Cooperative",
      label: "Co-operative",
    },
  ];

  const btn = {
    width: "90vw",
    height: "40px",
  };

  return (
    <form>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {isWithdraw && (
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="bank"
              select
              label="Bank"
              helperText="Please select your bank"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        )}
        {isWithdraw && (
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="accNumber">Account Number</InputLabel>
            <OutlinedInput id="accNumber" label="Account Number" />
          </FormControl>
        )}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <OutlinedInput
            id="phoneNumber"
            label="Phone number"
            placeholder="0712345678"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">KSH</InputAdornment>
            }
            label="Amount"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="comment">Comment</InputLabel>
          <OutlinedInput id="comment" label="comment" />
        </FormControl>
      </Box>
      <div className="Getstarted">
        <Button variant="contained"  type="submit" style={btn}>
          Send Request
        </Button>
      </div>
    </form>
  );
}
