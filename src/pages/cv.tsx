import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CvCategory from '../components/CvCategory';
import CvItem from '../components/CvItem';
import { ItemCVProps } from '../types/types';
import CVpdf from '../static/VLADIMIR_POLANSKY__Frontend_developer.pdf';
import PageTitle from '../components/PageTitle';

const title = 'CV';
const CVLink = '../../VLADIMIR_POLANSKY__Frontend_developer.pdf';

type NodeType = {
  category: string;
  items: ItemCVProps[];
};

type EdgesType = {
  node: NodeType;
};

// type CVProps = {
//   allCvJson: {
//     edges: EdgesType[];
//   };
// };

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
        <PageTitle>{title}</PageTitle>
        {/* <a href={CVpdf} target="_blank" rel="noopener noreferrer" download> */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            href={CVpdf}
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
            // sx={{ justifyContent: 'center' }}
          >
            Download CV
          </Button>
        </Box>
        {/* </a> */}
        {/* <Typography component="h2" variant="h3">
          {title}
        </Typography> */}
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
                    px={{ xs: 2, sm: 4 }}
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
        {/* </> */}
      </Container>
    </Layout>
  );
};

export default CVPage;

export const Head = () => <SEO title={title} />;
