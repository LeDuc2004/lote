import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrinks, fetchFastfood } from "../store/createTable";
import { Container, Grid } from "@mantine/core";
import BaseCard from "../components/BaseCard";
import CardSeleton from "../components/CardSeleton";

const FastFood = () => {
  const dispatch = useDispatch();
  const arr = ["", "", "", "", "", "", "", ""];
  useEffect(() => {
    dispatch(fetchFastfood());
  }, []);
  const listdata = useSelector((state) => state);
  return (
    <Container size="70rem" my={40}>
      <Grid>
        {listdata.listTable.status == "idle"
          ? listdata?.listTable?.fastfood.map((item, index) => (
              <Grid.Col span={3}>
                <BaseCard item={item}/>
              </Grid.Col>
            ))
          : arr.map((item, index) => (
            <Grid.Col span={3}>
              <CardSeleton />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
};

export default FastFood;

