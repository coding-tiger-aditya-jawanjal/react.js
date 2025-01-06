const Layout = ({ children }) => {
  return (
    <div>
      <div>Header </div>
      {children}
      <div>Footer </div>
    </div>
  );
};

export default Layout;
