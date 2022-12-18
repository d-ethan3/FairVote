"use client";

import {
  Accordion,
  Sidebar as FlowbiteSidebar,
} from "flowbite-react";
import React, { useState } from "react";
import {
  HiChartPie,
  HiTable,
  HiViewBoards,
} from "react-icons/hi";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { SidebarProvider } from "./context/SidebarContext";

export default function Index(): JSX.Element {
  return (
    <SidebarProvider>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <HomePage />
        </main>
        <div className="order-1">
          <ActualSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
}

function ActualSidebar(): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Create Vote
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Connect Wallent
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Welcome to <code>FairVoe</code>
          </h1>
        </header>
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Introduction
          </h2>
        </header>
        <AccordionExample />
      </section>
    </div>
  );
}

function AccordionExample(): JSX.Element {
  return (
    <Accordion flush>
      <Accordion.Panel>
        <Accordion.Title>What is FairBote?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The Fairvote product is a web3 privacy voting system based on zk technology. Through zk technology, voters can participate in voting without revealing their identity information, which not only ensures the privacy of voters, but also avoids the abuse of voting information. At the same time, through blockchain technology, Fairvote can also guarantee the fairness and traceability of voting results, thereby ensuring the validity and credibility of voting results. In addition, our product is also highly usable and flexible. Combined with ChatGP AI, through the synonym conversion of sentences, while dispelling the user's personal language characteristics, it can accurately express user opinions and better protect user privacy. The system can be applied to various voting scenarios, including government elections, corporate decision-making, community voting, etc. Our products can provide voters with a safer, more reliable and more transparent voting experience.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What is FairVote vision</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We believe that in DAO, everyone can express their true thoughts and should not be influenced by other information, so as to ensure relative fairness and justice in voting and other activities.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
