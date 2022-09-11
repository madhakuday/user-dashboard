import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CardComp from "../../Components/app/Cards/Card";
import SmallCard from "../../Components/app/Cards/SmallCard";
import PayMentCard from "../../Components/app/Cards/PayMentCard";
import {
  AccountBalanceIcon,
  CurrencyRupeeIcon,
  AddCardIcon,
} from "../../Components/Icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const BillCard = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={12} md={5}>
          <CardComp />
        </Grid>

        <Grid xs={12} md={2}>
          <SmallCard
            Icons={<AccountBalanceIcon />}
            title="Salary"
            des="Belong Interactive"
            amount="+$2000"
          />
        </Grid>

        <Grid xs={12} md={2}>
          <SmallCard
            Icons={<CurrencyRupeeIcon />}
            title="Paypal"
            des=" Freelance
            Payment"
            amount="$455.00"
          />
        </Grid>

        <Grid xs={12} md={2}>
          <SmallCard
            Icons={<AddCardIcon />}
            title="Test"
            des="Test data"
            amount="$455.00"
          />
        </Grid>
        <Grid xs={12} md={12}>
          <PayMentCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default BillCard;
