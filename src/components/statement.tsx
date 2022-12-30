import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "Description",
    headerName: "Description",
    width: 200,
  },

  {
    field: "amount",
    headerName: "amount",
    type: "number",
    width: 100,
  },
];

const rows = [
  { id: 1, Description: "Paying Rent", amount: +5000 },
  { id: 2, Description: "Paying Rent", amount: +6000 },
  { id: 3, Description: "Paying Rent", amount: +5000 },
  { id: 4, Description: "Cashing out", amount: -10000 },
  { id: 5, Description: "Paying Rent", amount: +3500 },
  { id: 6, Description: " Cashing out", amount: -1500 },
  { id: 7, Description: "Paying Rent", amount: +4000 },
  { id: 8, Description: "Cashing out", amount: -8000 },
  { id: 9, Description: "Cashing out", amount: -2000 },
];

export default function Statement() {
  return (
    <Box sx={{ height: "60vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}

        // disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
