import React, { useState } from "react";
let styles = require("./headline.module.css");
import logo from "./logo.png";
import telegram from "./telegram.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface HeaderProps {}

const HeadLine: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const handleSmoothScroll = (event: React.MouseEvent, link: string) => {
    event.preventDefault();
    setOpen(false); // Закриваємо Drawer після кліку на пункт меню
    const targetId = link.slice(1); // Видаляємо "#" з посилання
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 0; // Відступ у пікселях
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const menuList = [
    { name: "Про проєкт", link: "#about" },
    { name: "Наші досягнення", link: "#stat" },
    { name: "Конвертуємо донати", link: "#howwetowork" },
    // { name: "Наш телеграм", link: "#telegram" },
    { name: `Детальніше про "Тепло на передову"`, link: "#detailed" },
    { name: "Позиції допомоги", link: "#position" },
    { name: "Наша команда", link: "#team" },
    { name: "Контакти", link: "#contact" },
  ];

  return (
    <div className={styles.container}>
      <div>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.buttoncontainer}>
        <a href="https://send.monobank.ua/jar/pAH2wwD8n" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Підтримати</button>
        </a>
      </div>
      <div className={styles.menuButtons}>
        <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
          <div className={styles.telegramcontainer}>
            <img src={telegram} className={styles.telegram} />
          </div>
        </a>
        <div className={styles.burgercontainer}>
          <IconButton onClick={toggleDrawer(!open)} color="inherit">
            {open ? <CloseIcon className={styles.closeIcon} /> : <MenuIcon className={styles.menuIcon} />}
          </IconButton>
          <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} classes={{ paper: styles.menuContainer }}>
            <div className={styles.listContainer}>
              <List>
                {menuList.map((menu) => (
                  <a
                    href={menu.link}
                    key={menu.name}
                    className={styles.menuItem}
                    onClick={(event) => handleSmoothScroll(event, menu.link)}
                  >
                    <ListItem className={styles.menuItem}>
                      <ListItemText key={menu.name} primary={menu.name} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;
