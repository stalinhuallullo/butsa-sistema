"use client"

import React, { useEffect, useState } from "react";
import Footer from "./component-layout/footer/footer";
import { Provider } from "react-redux";
import store from "../../shared/redux/store";
import dynamic from "next/dynamic";
import Rightside from "../../shared/layout-components/right-sidebar/right-sidebar";
import TabToTop from "../../shared/layout-components/tab-to-top/tab-to-top";
import { useRouter } from "next/navigation";
import Header from "../../shared/layout-components/header/header";
const Switcher = dynamic(() => import("../../shared/layout-components/switcher/switcher"), { ssr: false });
const Sidebar = dynamic(() => import("../../shared/layout-components/sidebar/sidebar"), { ssr: false });
import SSRProvider from 'react-bootstrap/SSRProvider';

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
    let Router = useRouter();
  const Add = () => {
    document.querySelector("body").classList.remove("error-1");
    document
      .querySelector("body")
      .classList.remove(
        "app",
        "sidebar-mini",
        "ltr",
        "landing-page",
        "horizontalmenu"
      );
    document.querySelector("body").classList.add("main-body", "leftmenu");
    document.body.classList.add("ltr", "main-body", "leftmenu");
  };
  useEffect(() => {
    Add();

    if (localStorage.getItem("Spruhahorizontal")) {
      document.querySelector("body").classList.add("horizontalmenu");
      document.querySelector(".main-content").classList.add("hor-content");
      if (document.querySelector("main-container-1") != null) {
        document.querySelector(".main-container-1").classList.add("container");
        document
          .querySelector(".main-menu")
          .classList.add("main-navbar", "hor-menu");
        document
          .querySelector(".main-container-1")
          .classList.remove("main-sidebar-header");
        document
          .querySelector(".main-menu")
          .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
        document
          .querySelector(".main-body-1")
          .classList.remove("main-sidebar-body");
      }
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document
        .querySelector("body")
        .classList.remove(
          "horizontalmenu-hover",
          "leftmenu",
          "main-body",
          "default-menu"
        );
      document.querySelector(".main-content").classList.remove("side-content");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
    }

    if (localStorage.getItem("Spruhahorizontalhover")) {
      document
        .querySelector("body")
        .classList.add("horizontalmenu", "horizontalmenu-hover");
      document.querySelector(".main-content").classList.add("hor-content");
      if(document.querySelector(".main-menu")!=null){
          document.querySelector(".main-menu").classList.add("main-navbar", "hor-menu");
          document.querySelector(".main-container-1").classList.add("container");
          document
            .querySelector(".main-menu")
            .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
            document
              .querySelector(".main-container-1")
              .classList.remove("main-sidebar-header");
              document
                .querySelector(".main-body-1")
                .classList.remove("main-sidebar-body");
      }
      document.querySelectorAll(".main-container").forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document.querySelector("body").classList.remove("leftmenu", "main-body");
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector(".main-content").classList.remove("side-content");
      document.querySelector("body").classList.remove("default-menu");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
    //    
    }
  });

  const remove = () => {
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    document.querySelector("body").classList.remove("main-sidebar-show");
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
    if (document.querySelector(".card.search-result") != null) {
      document.querySelector(".card.search-result").classList.add("d-none");
    }
    if (document.body.classList.contains("horizontalmenu")){
      document.querySelectorAll(".nav-sub").forEach((res)=>{
        res.classList = "nav-sub"
        res.style.display = "none"
      })
    }
  };
  return (
    <>
      {/* <Head>
        <body className="ltr main-body leftmenu"></body>
        </Head> */}
        <SSRProvider>
      <Provider store={store}>
        <div className="horizontalMenucontainer">
          <div className="page">
            <Header />
            <Sidebar />
            <div className="main-content side-content pt-0">
              <div
                className="main-container container-fluid"
                onClick={() => remove()}
              >
                <div className="inner-body">{children}</div>
              </div>
            </div>
            <Rightside />
          </div>
          <Switcher />
          <TabToTop />
          <Footer />
        </div>
      </Provider>
        </SSRProvider>
    </>
  );
  }