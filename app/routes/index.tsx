// import React, { Component } from 'react';
import { Button } from 'carbon-components-react';
import { Outlet } from 'remix';
// import styles from "~/styles/app.css";

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export default function Index() {
  return (
    <>
        <Button>Button</Button>
        <Outlet />
    </>
  );
}