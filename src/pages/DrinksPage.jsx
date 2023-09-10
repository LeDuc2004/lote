import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrinks } from "../store/createTable";
import { Container, Grid } from "@mantine/core";
import BaseCard from "../components/BaseCard";

const DrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDrinks());
  }, []);
  const listdata = useSelector((state) => state);
  return (
    <Container size="70rem" my={40}>
      <Grid>
        {listdata.listTable.status == "idle"
          ? listdata?.listTable?.drinks.map((item, index) => (
              <Grid.Col span={3}>
                <BaseCard item={item}/>
              </Grid.Col>
            ))
          : ""}
      </Grid>
    </Container>
  );
};

export default DrinksPage;
