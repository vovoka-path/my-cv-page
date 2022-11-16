import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  location?: Location;
  title?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

// const rootPath = `${__PATH_PREFIX__}/`;
// let header;
// title = 'This title';

// console.log('rootPath =', rootPath);
// console.log('location.pathname =', document.location.pathname);

// if (document.location.pathname === rootPath) {
//   header = (
//     <h1
//       style={{
//         // ...scale(1.5),
//         // marginBottom: rhythm(1.5),
//         marginTop: 0,
//       }}
//     >
//       <Link
//         style={{
//           boxShadow: `none`,
//           textDecoration: `none`,
//           color: `inherit`,
//         }}
//         to={`/`}
//       >
//         !!!{title}
//       </Link>
//     </h1>
//   );
// } else {
//   header = (
//     <h3
//       style={{
//         fontFamily: `Montserrat, sans-serif`,
//         marginTop: 0,
//       }}
//     >
//       <Link
//         style={{
//           boxShadow: `none`,
//           textDecoration: `none`,
//           color: `inherit`,
//         }}
//         to={`/`}
//       >
//         {title}
//       </Link>
//     </h3>
//   );
// }
