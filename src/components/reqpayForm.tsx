import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import "../App.css";

import { BounceLoader } from "react-spinners";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";

import { requestPayment, withDraw } from "../Api";

export default function PaymentForm(props: { title: string }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [userForm, setuserForm] = useState({
    accNumber: "",
    phoneNumber: "",
    amount: "",
    comment: "",
    appId: "12345",
    walletId: 3,
  });

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

  async function reqHandler() {
    setOpen(true);
    if (isWithdraw) {
      const jen = await withDraw({
        phoneNumber: userForm.phoneNumber,
        accountNumber: userForm.accNumber,
        comment: userForm.comment,

        amount: +userForm.amount,
        appId: userForm.appId,
        walletId: userForm.walletId,
      });

      console.log(jen);
      setOpen(false);
      navigate("/home");
    } else {
      console.log(userForm);
      const mps = await requestPayment({
        
          walletId: userForm.walletId,
          comment:  userForm.comment,
          transactionType: "credit", 
          service: "mps",
          serviceId: "express",
          serviceBody: { amount: +userForm.amount,phoneNo:userForm.phoneNumber,fee:0,accNumber:userForm.phoneNumber}
  
      });

      console.log(mps);
      setOpen(false);
      navigate("/home");
    }
  }

  return (
    <form>
      {open ? (
        <div style={{ textAlign: "center" }}>
          <BounceLoader
            cssOverride={{ margin: "30px auto" }}
            size="150"
            color="#66ccff"
          />
          <br />
          <h2>sending Request ...</h2>

          <br />

          <p>Please wait...</p>
        </div>
      ) : (
        <>
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
                <OutlinedInput
                  id="accNumber"
                  value={userForm.accNumber}
                  label="Account Number"
                  onChange={(e) => {
                    setuserForm({ ...userForm, accNumber: e.target.value });
                  }}
                />
              </FormControl>
            )}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
              <OutlinedInput
                id="phoneNumber"
                label="Phone number"
                placeholder="0712345678"
                value={userForm.phoneNumber}
                onChange={(e) => {
                  setuserForm({ ...userForm, phoneNumber: e.target.value });
                }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">KSH</InputAdornment>
                }
                label="Amount"
                value={userForm.amount}
                onChange={(e) => {
                  setuserForm({ ...userForm, amount: e.target.value });
                }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="comment">Comment</InputLabel>
              <OutlinedInput
                id="comment"
                label="comment"
                value={userForm.comment}
                onChange={(e) => {
                  setuserForm({ ...userForm, comment: e.target.value });
                }}
              />
            </FormControl>
          </Box>
          <div className="Getstarted">
            <Button
              variant="contained"
              type="submit"
              style={btn}
              onClick={reqHandler}
            >
              Send Request
            </Button>
          </div>
        </>
      )}
    </form>
  );
}
