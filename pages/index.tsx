import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Header from "components/Header";
import Navletseat from "components/Navletseat";
import ContentLetsEat from "components/ContentLetsEat";
import Navbar from "components/Navbar";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login"); //direct ke login
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        {/* Header1 */}
        <div>
          <Header />
        </div>
        {/* Header per bagian */}
        <div>
          <Navletseat />
        </div>
        {/* Content */}
        <div>
          <ContentLetsEat />
          <ContentLetsEat />
          <ContentLetsEat />
          <ContentLetsEat />
          <ContentLetsEat />
        </div>
        {/* Navbar */}
        <div>
          <Navbar />
        </div>
      </div>
    );
    
  return <div className="text-bold text-3xl">loading</div>;
};

export default Protected;