import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '@fontsource/montserrat/latin.css';
import '@fontsource/dancing-script/latin.css';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Theme1 from '../components/Theme1';
import { ItemCVProps } from '../types/types';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import useSiteMetadata from '../hooks/useSiteMetadata';

const title = 'Vovoka.space <- contact me now!';

const printStyles = {
  '@media print': {
    fontSize: '6px',
  },
};

const baseFont = {
  marginTop: '-4px',
};
const lineStyle = '1px dotted';
const fontSizeStyle = '11px';
const paddingTopStyle = '0.3rem';

type NodeType = {
  category: string;
  items: ItemCVProps[];
};

type EdgesType = {
  node: NodeType;
};

const CVPrint = () => {
  const dataByCategory: EdgesType[] = useStaticQuery(graphql`
    query CvQuery {
      allCvJson {
        edges {
          node {
            category
            items {
              date
              title
              subtitle
              description
              description_link
            }
          }
        }
      }
    }
  `).allCvJson.edges;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme1}>
        <CssBaseline />
        <Container maxWidth="lg">
          <PageTitle>{title}</PageTitle>
          <Box mt={6} sx={{ ...printStyles }}>
            {dataByCategory.map((categoryData, indexCategory) => {
              return (
                <>
                  <Box
                    key={`boxCVp-${indexCategory}`}
                    pb={2}
                    sx={{ display: 'flex' }}
                    flexDirection={'row'}
                  >
                    <Box
                      py={0}
                      px={4}
                      width={'20%'}
                      justifyContent={'right'}
                      borderRight={lineStyle}
                      borderTop={'none'}
                      sx={{ display: 'flex', lineHeight: 1.2, textTransform: 'uppercase' }}
                    >
                      <Typography
                        component="h3"
                        color={Theme1.palette.secondary.dark}
                        sx={{ fontWeight: 600, fontSize: fontSizeStyle }}
                      >
                        {categoryData.node.category}
                      </Typography>
                    </Box>
                    <Box pt={0} px={1} width={'80%'}>
                      {categoryData.node.items.map((cvItem, indexItem) => (
                        <Container
                          key={`itemCVp-${indexCategory}-${indexItem}`}
                          sx={{
                            paddingTop:
                              +!!cvItem.title +
                                +!!cvItem.subtitle +
                                +!!cvItem.date +
                                +!!cvItem.description ===
                                1 || !indexItem
                                ? '0'
                                : paddingTopStyle,
                            paddingBottom: '0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                          }}
                        >
                          <Box
                            pr={2}
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'start',
                              flexWrap: 'wrap',
                              textTransform: 'uppercase',
                            }}
                          >
                            {cvItem.title && (
                              <Box
                                sx={{
                                  ...baseFont,
                                  marginTop: '0',
                                  display: 'flex',
                                  justifyContent: 'start',
                                }}
                              >
                                <Typography
                                  component="h4"
                                  color={Theme1.palette.secondary.dark}
                                  sx={{ fontWeight: 600, fontSize: fontSizeStyle }}
                                >
                                  {cvItem.title}
                                </Typography>
                              </Box>
                            )}
                            {cvItem.subtitle && (
                              <Box sx={{ ...baseFont, display: 'flex', justifyContent: 'start' }}>
                                <Typography
                                  component="h5"
                                  sx={{ fontWeight: 300, fontSize: fontSizeStyle }}
                                >
                                  {cvItem.subtitle}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                          {cvItem.date && (
                            <Box
                              width={'auto'}
                              justifyContent={'end'}
                              sx={{
                                display: 'flex',
                                alignItems: 'start',
                                fontWeight: 300,
                                textTransform: 'uppercase',
                              }}
                            >
                              <Typography
                                component="p"
                                sx={{ fontWeight: '300', fontSize: fontSizeStyle }}
                              >
                                {cvItem.date}
                              </Typography>
                            </Box>
                          )}

                          {cvItem.description && (
                            <Box
                              pt={0}
                              sx={{
                                marginTop: '1px',
                                display: 'flex',
                                justifyContent: 'start',
                                width: '100%',
                              }}
                            >
                              <Typography
                                component="p"
                                sx={{ fontWeight: '300', fontSize: fontSizeStyle }}
                                color={'rgba(51, 51, 51, 0.9)'}
                              >
                                {cvItem.description}
                              </Typography>
                            </Box>
                          )}
                        </Container>
                      ))}
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CVPrint;

export const Head = () => <SEO title={`${useSiteMetadata().title}: ${title}`} />;
