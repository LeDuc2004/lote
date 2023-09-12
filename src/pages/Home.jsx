import React from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { MantineProvider, Text } from "@mantine/core";
import CustomHeader from "../components/Header";
import CustomFooter from "../components/Footer";
import Body from "../components/Body";
import { ModalsProvider } from "@mantine/modals";
// import { Route, Routes } from "react-router-dom";
function Home() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <AppShell
            styles={{
              main: {
                height: "100vh",
                padding: 0,
                paddingTop: "var(--mantine-header-height, 0px)",
              },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
          >
            <Body />
          </AppShell>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default Home;
