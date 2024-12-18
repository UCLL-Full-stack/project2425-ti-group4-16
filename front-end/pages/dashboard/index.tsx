import React from "react";
import Head from "next/head";
import Header from "@/components/header";

const Dashboard: React.FC = () =>{
    return(
        <>
              <Head>
                <title>Dashboard</title>
              </Head>
        
              <Header />
        </>      
    )
}
export default Dashboard;