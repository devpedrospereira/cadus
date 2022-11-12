import "./header.scss";
//react
import * as React from "react";

//Mui - Component
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//Mui - Icons
import MenuIcon from "@mui/icons-material/Menu";

//types
type Anchor = "left";

export const Header = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const listMenu = [
    "Sobre",
    "Serviços",
    "Parceiros",
    "Startups",
    "Notícias",
    "Blog",
    "Equipe",
    "Contato",
  ];

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listMenu.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ pb: 0 }} href={`#${item}`}>
              <ListItemText secondary={item} sx={{ p: 0, mx: 0, mr: 10 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header className="header">
        <section className="osten-group">
          <img src="./logo/logo-osten-group.png" alt="logo OstenGroup" />
        </section>
        <section className="header-main">
          <img src="./logo/logo-osten-moove.png" alt="logo OstenMoove" />
          <aside className="header-main-mobile">
            <Button onClick={toggleDrawer("left", true)}>
              <MenuIcon sx={{ color: "#ffffff" }} />
            </Button>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </aside>
          <aside className="header-main-desktop">
            <ul>
              {listMenu.map((item, index) => (
                <li key={index}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </header>
    </>
  );
};
