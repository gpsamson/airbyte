import { Menu } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

import styles from "./SidebarDropdownMenu.module.scss";

export const SidebarDropdownMenu: React.FC<{
  children: React.ReactNode;
  options?: React.ReactNode[];
}> = ({ children, options }) => {
  return (
    <Menu className={styles.sidebarMenu} as="div">
      {({ open }) => (
        <>
          <Menu.Button className={classNames(styles.button, { [styles.open]: open })}>{children}</Menu.Button>
          <Menu.Items className={styles.items} as="div">
            {options?.map((item, index) => (
              <Menu.Item className={styles.item} as="div" key={index}>
                {item}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};
