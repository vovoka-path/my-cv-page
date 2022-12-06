import * as React from 'react';
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
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
import Theme1 from '../components/Theme1';
// import PageTitle from '../components/PageTitle';

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
      {/* <Alert variant="filled" severity="success" sx={{ margin: 'auto 0' }}>
        <AlertTitle>Download cv.pdf</AlertTitle>
        This is a success alert — check it out!
        <Link href="/cv" pl={2}>
          <Button variant="contained" size="small">
            Outlined
          </Button>
        </Link>
      </Alert> */}
      <Container maxWidth="lg">
        <Box
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, my: 8 }}
          // flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Button
            href={CVpdf}
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            // sx={{ width: '180px', textShadow: '1px 2px 0 #ffffff, -1px -2px 0 #ffffff' }}
          >
            Download CV
          </Button>
          <Link style={{ textDecoration: `none` }} to={'/cv-print'}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PrintIcon />}
              // sx={{ width: '180px', textShadow: '1px 2px 0 #ffffff, -1px -2px 0 #ffffff' }}
            >
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
                  sx={{ display: 'flex' }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <CvCategory category={categoryData.node.category} id={indexCategory} />
                  <Box
                    pt={{ xs: 2, sm: 0 }}
                    px={{ xs: 0, sm: 4 }}
                    width={{ xs: '100%', sm: '70%' }}
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
