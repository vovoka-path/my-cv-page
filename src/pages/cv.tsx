import * as React from 'react';
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PagesBG from '../components/PagesBG';
import CvCategory from '../components/CvCategory';
import CvItem from '../components/CvItem';
import { ItemCVProps } from '../types/types';
import CVpdf from '../static/VLADIMIR_POLANSKY__Frontend_developer.pdf';
import useSiteMetadata from '../hooks/useSiteMetadata';

const title = 'CV';

type NodeType = {
  category: string;
  items: ItemCVProps[];
};

type EdgesType = {
  node: NodeType;
};

const CVPage: React.FC<PageProps> = () => {
  const dataByCategory: EdgesType[] = useStaticQuery(graphql`
    query CvQuery {
      allCvJson {
        edges {
          node {
            category
            items {
              date
              description
              subtitle
              title
            }
          }
        }
      }
    }
  `).allCvJson.edges;

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, my: 8 }}>
          <Button href={CVpdf} variant="contained" color="primary" startIcon={<SaveIcon />}>
            Download CV
          </Button>
          <Link style={{ textDecoration: `none` }} to={'/cv-print'}>
            <Button variant="contained" color="primary" startIcon={<PrintIcon />}>
              Print version
            </Button>
          </Link>
        </Box>
        <Box my={6}>
          {dataByCategory.map((categoryData, indexCategory) => {
            return (
              <>
                <Box
                  key={`boxCV-${indexCategory}`}
                  pb={4}
                  sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
                >
                  <CvCategory category={categoryData.node.category} id={indexCategory} />
                  <Box
                    pt={{ xs: 2, sm: 0 }}
                    px={{ xs: 0, sm: 4 }}
                    sx={{ width: { xs: '100%', sm: '70%' } }}
                  >
                    {categoryData.node.items.map((cvItem, indexItem) => (
                      <CvItem
                        key={`itemCV-${indexCategory}-${indexItem}`}
                        {...{ ...cvItem, id: indexItem }}
                      />
                    ))}
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
      </Container>
      <PagesBG />
    </Layout>
  );
};

export default CVPage;

export const Head = () => <SEO title={`${useSiteMetadata().title}: ${title}`} />;
