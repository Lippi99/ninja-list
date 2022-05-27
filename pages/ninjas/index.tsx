import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../styles/ninjas.module.css";

export const Ninjas = ({ ninjas }: any) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((ninja: any) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
};
