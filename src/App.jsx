import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./css/style.scss";

import "./charts/ChartjsConfig";

// Import pages
import User from "./pages/users/User";
import CreateUser from "./pages/users/CreateUser";
import UserDetails from "./pages/users/UserDetails";

import AddInfo from "./pages/infos/AddInfo";
import ListInfos from "./pages/infos/ListInfos";
import InfosDetails from "./pages/infos/DetailsInfo";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Fintech from "./pages/Fintech";
import Customers from "./pages/ecommerce/Customers";
import Orders from "./pages/ecommerce/Orders";
import Invoices from "./pages/ecommerce/Invoices";
import Shop from "./pages/ecommerce/Shop";
import Shop2 from "./pages/ecommerce/Shop2";
import Product from "./pages/ecommerce/Product";
import Cart from "./pages/ecommerce/Cart";
import Cart2 from "./pages/ecommerce/Cart2";
import Cart3 from "./pages/ecommerce/Cart3";
import Pay from "./pages/ecommerce/Pay";
import Campaigns from "./pages/Campaigns";

import ListPapers from "./pages/papers/ListPapers";
import AddPaper from "./pages/papers/AddPaper";
import DetailsPaper from "./pages/papers/DetailsPaper";

import Message from "./pages/messages/Messages";

import UsersTabs from "./pages/community/UsersTabs";
import UsersTiles from "./pages/community/UsersTiles";
import Profile from "./pages/community/Profile";
import Feed from "./pages/community/Feed";
import Forum from "./pages/community/Forum";
import ForumPost from "./pages/community/ForumPost";
import Meetups from "./pages/community/Meetups";
import MeetupsPost from "./pages/community/MeetupsPost";
import CreditCards from "./pages/finance/CreditCards";
import Transactions from "./pages/finance/Transactions";
import TransactionDetails from "./pages/finance/TransactionDetails";
import JobListing from "./pages/job/JobListing";
import JobPost from "./pages/job/JobPost";
import CompanyProfile from "./pages/job/CompanyProfile";
import Messages from "./pages/Messages";
import TasksKanban from "./pages/tasks/TasksKanban";
import TasksList from "./pages/tasks/TasksList";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Account from "./pages/settings/Account";
import Notifications from "./pages/settings/Notifications";
import Apps from "./pages/settings/Apps";
import Plans from "./pages/settings/Plans";
import Billing from "./pages/settings/Billing";
import Feedback from "./pages/settings/Feedback";
import Changelog from "./pages/utility/Changelog";
import Roadmap from "./pages/utility/Roadmap";
import Faqs from "./pages/utility/Faqs";
import EmptyState from "./pages/utility/EmptyState";
import PageNotFound from "./pages/utility/PageNotFound";
import KnowledgeBase from "./pages/utility/KnowledgeBase";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Onboarding01 from "./pages/Onboarding01";
import Onboarding02 from "./pages/Onboarding02";
import Onboarding03 from "./pages/Onboarding03";
import Onboarding04 from "./pages/Onboarding04";
import ButtonPage from "./pages/component/ButtonPage";
import FormPage from "./pages/component/FormPage";
import DropdownPage from "./pages/component/DropdownPage";
import AlertPage from "./pages/component/AlertPage";
import ModalPage from "./pages/component/ModalPage";
import PaginationPage from "./pages/component/PaginationPage";
import TabsPage from "./pages/component/TabsPage";
import BreadcrumbPage from "./pages/component/BreadcrumbPage";
import BadgePage from "./pages/component/BadgePage";
import AvatarPage from "./pages/component/AvatarPage";
import TooltipPage from "./pages/component/TooltipPage";
import AccordionPage from "./pages/component/AccordionPage";
import IconsPage from "./pages/component/IconsPage";
// import Details from "./pages/logement/Detail";
import AddLoge from "./pages/logement/AddLoge";
import ListLoge from "./pages/logement/ListLoge";
import FintechA from "./pages/dashboard/FintechA";
import AnalyticsA from "./pages/dashboard/AnalyticsA";
import DashboardA from "./pages/dashboard/DashboardA";
import ListSchool from "./pages/school/ListSchool";
import DetailsSchool from "./pages/school/DetailsSchool";
import AddSchool from "./pages/school/AddSchool";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<DashboardA />} />
        <Route exact path="dashboarda">
          <Route path="" element={<DashboardA />} />
          <Route path="analytics" element={<AnalyticsA />} />
          <Route path="fintech" element={<FintechA />} />
        </Route>

        <Route exact path="users">
          <Route path="" element={<Navigate to="list" replace />} />
          <Route path="add" element={<CreateUser />} />
          <Route path="list" element={<User />} />
          <Route path="edit/:id" element={<CreateUser />} />
          <Route path="details/:id" element={<UserDetails />} />
        </Route>

        <Route exact path="infos">
          <Route path="" element={<Navigate to="list" replace />} />
          <Route path="list" element={<ListInfos />} />
          <Route path="add" element={<AddInfo />} />
          <Route path="edit/:id" element={<AddInfo />} />
          <Route path="details/:id" element={<InfosDetails />} />
        </Route>

        <Route exact path="papers">
          <Route path="" element={<Navigate to="list" replace />} />
          <Route path="list" element={<ListPapers />} />
          <Route path="add" element={<AddPaper />} />
          <Route path="edit/:id" element={<AddPaper />} />
          <Route path="details/:id" element={<DetailsPaper />} />
        </Route>

        <Route exact path="schools">
          <Route path="" element={<Navigate to="list" replace />} />
          <Route path="list" element={<ListSchool />} />
          <Route path="add" element={<AddSchool />} />
          <Route path="edit/:id" element={<AddSchool />} />
          <Route path="details/:id" element={<DetailsSchool />} />
        </Route>

        <Route exact path="logement">
          <Route path="" element={<Navigate to="list" replace />} />
          <Route path="list" element={<ListLoge />} />
          <Route path="add" element={<AddLoge />} />
        </Route>

        <Route path="/chats" element={<Message />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/fintech" element={<Fintech />} />
        <Route path="/ecommerce/customers" element={<Customers />} />
        <Route path="/ecommerce/orders" element={<Orders />} />
        <Route path="/ecommerce/invoices" element={<Invoices />} />
        <Route path="/ecommerce/shop" element={<Shop />} />
        <Route path="/ecommerce/shop-2" element={<Shop2 />} />
        <Route path="/ecommerce/product" element={<Product />} />
        <Route path="/ecommerce/cart" element={<Cart />} />
        <Route path="/ecommerce/cart-2" element={<Cart2 />} />
        <Route path="/ecommerce/cart-3" element={<Cart3 />} />
        <Route path="/ecommerce/pay" element={<Pay />} />
        <Route path="/campaigns" element={<Campaigns />} />
        {/* <Route path="/pepers/listen" element={<Listen />} /> */}
        <Route path="/community/users-tabs" element={<UsersTabs />} />
        <Route path="/community/users-tiles" element={<UsersTiles />} />
        <Route path="/community/profile" element={<Profile />} />
        <Route path="/community/feed" element={<Feed />} />
        <Route path="/community/forum" element={<Forum />} />
        <Route path="/community/forum-post" element={<ForumPost />} />
        <Route path="/community/meetups" element={<Meetups />} />
        <Route path="/community/meetups-post" element={<MeetupsPost />} />
        <Route path="/finance/cards" element={<CreditCards />} />
        <Route path="/finance/transactions" element={<Transactions />} />
        <Route
          path="/finance/transaction-details"
          element={<TransactionDetails />}
        />
        <Route path="/job/job-listing" element={<JobListing />} />
        <Route path="/job/job-post" element={<JobPost />} />
        <Route path="/job/company-profile" element={<CompanyProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tasks/kanban" element={<TasksKanban />} />
        <Route path="/tasks/list" element={<TasksList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/settings/notifications" element={<Notifications />} />
        <Route path="/settings/apps" element={<Apps />} />
        <Route path="/settings/plans" element={<Plans />} />
        <Route path="/settings/billing" element={<Billing />} />
        <Route path="/settings/feedback" element={<Feedback />} />
        <Route path="/utility/changelog" element={<Changelog />} />
        <Route path="/utility/roadmap" element={<Roadmap />} />
        <Route path="/utility/faqs" element={<Faqs />} />
        <Route path="/utility/empty-state" element={<EmptyState />} />
        <Route path="/utility/404" element={<PageNotFound />} />
        <Route path="/utility/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding-01" element={<Onboarding01 />} />
        <Route path="/onboarding-02" element={<Onboarding02 />} />
        <Route path="/onboarding-03" element={<Onboarding03 />} />
        <Route path="/onboarding-04" element={<Onboarding04 />} />
        <Route path="/component/button" element={<ButtonPage />} />
        <Route path="/component/form" element={<FormPage />} />
        <Route path="/component/dropdown" element={<DropdownPage />} />
        <Route path="/component/alert" element={<AlertPage />} />
        <Route path="/component/modal" element={<ModalPage />} />
        <Route path="/component/pagination" element={<PaginationPage />} />
        <Route path="/component/tabs" element={<TabsPage />} />
        <Route path="/component/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/component/badge" element={<BadgePage />} />
        <Route path="/component/avatar" element={<AvatarPage />} />
        <Route path="/component/tooltip" element={<TooltipPage />} />
        <Route path="/component/accordion" element={<AccordionPage />} />
        <Route path="/component/icons" element={<IconsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
