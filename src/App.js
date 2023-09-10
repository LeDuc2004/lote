import { MantineProvider, Text } from "@mantine/core";
import { useState } from "react";
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
import CustomHeader from "./components/Header";
import CustomFooter from "./components/Footer";
import Body from "./components/Body";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        styles={{
          main: {
            height:"100vh",
            padding: 0,
            paddingTop: "var(--mantine-header-height, 0px)",
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
      >
        <Body />
      </AppShell>
    </MantineProvider>
  );
}
