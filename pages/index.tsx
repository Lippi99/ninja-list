import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          integer vitae lectus vel nunc luctus posuere. Mauris vel rhoncus
          ipsum. Donec mi nisl, lobortis nec elementum at, scelerisque sit amet
          urna. Ut sed fringilla ipsum. Duis elementum faucibus mi, nec eleifend
          leo ultrices varius. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Curabitur ut tempor purus,
          ac ultricies nibh. Aenean vel tincidunt leo. Morbi egestas, purus sit
          amet semper accumsan, sapien enim pharetra sem, eget tempor lorem
          neque sed odio. Nulla pellentesque sagittis tincidunt. Sed sapien
          justo, elementum sed ligula non, posuere cursus enim. Aenean vehicula
          blandit metus, quis auctor massa dictum eu. Curabitur finibus cursus
          erat, nec bibendum ex vestibulum nec. Cras vulputate condimentum
          mauris vel viverra. Donec cursus libero eu sapien malesuada interdum.
          Nulla felis ligula, dictum eu urna vel, accumsan pretium augue.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
