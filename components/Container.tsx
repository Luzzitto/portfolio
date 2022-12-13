import Head from "next/head";
import { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
  title?: string;
}

const prop = {
  title: "Luzzitto Tupaz",
};

const Container = ({ children, title = prop.title }: ContainerProp) => {
  return (
    <>
      <Head>
        <title>
          {title != prop.title ? title + " - " + prop.title : title}
        </title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Container;
