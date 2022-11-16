import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import * as s from './Nav.module.css';

type NodeType = {
  id: string;
  title: string;
  path: string;
};

type EdgesType = {
  node: NodeType;
};

type NavProps = {
  allNavJson: {
    edges: EdgesType[];
  };
};

const Nav: React.FC = () => {
  const navQuery: NavProps = useStaticQuery(graphql`
    query NavQuery {
      allNavJson {
        edges {
          node {
            id
            title
            path
          }
        }
      }
    }
  `);

  const nav = navQuery.allNavJson.edges;

  return (
    <nav>
      <ul className={s.list}>
        {nav.map((item) => {
          const { id, title, path }: NodeType = item.node;

          return (
            <li key={id}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
