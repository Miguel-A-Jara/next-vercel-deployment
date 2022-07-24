import { FC, ReactNode } from "react";

import Head from "next/head"
import Navbar from "../Navbar";
import styles from './MainLayout.module.css';

interface IMainLayout {
  children: ReactNode;
} 

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Miguel</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        { children }

      </main>
    </div>
  )
}

export default MainLayout
