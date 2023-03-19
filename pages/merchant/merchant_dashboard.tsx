import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Header from "@/components/Merchant/Header_w_notif";
import Navletseat from "@/components/Merchant/Hero/Navletseat";
import ContentLetsEat from "components/ContentLetsEat";
import M_Navbar from "@/components/Merchant/M_Navbar";
// import NavbarCust from "@/components/Navbar_Customer";

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
          <Header>
            Anteiku
          </Header>
        </div>
        <div>
          <Navletseat />
        </div>
        {/* Content */}
        <div>
          <ContentLetsEat />
          <ContentLetsEat />
          <ContentLetsEat />
          <ContentLetsEat />
        </div>
        {/* Navbar */}
        <M_Navbar />
        <div></div>
      </div>
    );

  return <div className="text-bold text-3xl">loading</div>;
};

export default Protected;