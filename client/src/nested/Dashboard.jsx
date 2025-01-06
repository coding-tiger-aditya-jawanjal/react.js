import Layout from "./Layout";

const Dashboard = () => {
  let auth = JSON.parse(localStorage.getItem("user"));

  return <Layout>Dashboard page - : {auth[1].name}</Layout>;
};

export default Dashboard;
