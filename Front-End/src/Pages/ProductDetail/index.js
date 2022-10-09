import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { formatCurrency } from "../../utils/currency";
import DefaultLayout from "../../Components/Layout/DefaultLayout";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    axios.get("/api/products/6307d17f03f8efd1cf11e52b").then((res) => {
      setProduct(res.data.product);
    });
  }, []);
  const changeAmount = (quantity) => {
    if (amount === 1 && quantity < 0) {
      return;
    }
    setAmount((prev) => prev + quantity);
  };

  return (
    <DefaultLayout>
      <Box display="flex" alignItems="center" justifyContent="center" my={10}>
        <img width={400} height={400} src={product?.url} />
        <Box>
          <Typography>{product?.discription}</Typography>
          <Box display="flex" alignItems="center" gap={3} mt={3}>
            <Button variant="contained" onClick={() => changeAmount(-1)}>
              <RemoveIcon />
            </Button>
            <Typography>{amount}</Typography>
            <Button variant="contained" onClick={() => changeAmount(1)}>
              <AddIcon />
            </Button>
          </Box>
          <Typography mt={3}>
            Thanh tien: {formatCurrency(Number(product?.price) * amount)}
          </Typography>
          <Box mt={3}>
            <Button variant="contained">
              Thanh toan
            </Button>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default ProductDetail;
