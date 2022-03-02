import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: "Gilroy-Bold", "Gilroy-Heavy", "Gilroy-Light", "Gilroy-Medium",
    "Gilroy-Regular", sans-serif;
  color: #1e1e1e;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 55px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fff;
  }

  &:focus {
    color: #grey;
    border-radius: 3px;
    // outline: 2px solid grey;
    outline-offset: 2px;
    border-radius: 55px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #ffffff;
    color: #1e1e1e;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 50%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 100px;
  max-width: 320px;
  background-color: #eeeeee;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  border-radius: 55px;
`;

export default function UnstyledTabsCustomized() {
  return (
    <TabsUnstyled defaultValue={0} align='center'>
      <TabsList>
        <Tab>Chair</Tab>
        <Tab>Beds</Tab>
        <Tab>Sofa</Tab>
        <Tab>Lamp</Tab>
      </TabsList>
      {/* <TabPanel value={0}>First content</TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel> */}
    </TabsUnstyled>
  );
}
