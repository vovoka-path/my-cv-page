import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import '@fontsource/montserrat/latin.css';
import '@fontsource/dancing-script/latin.css';
import Theme1 from '../components/Theme1';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import SEO from './SEO';
import { ItemCVProps } from '../types/types';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';

const title = 'https://vovoka.space';
// const title = 'Vladimir Polansky, frontend developer';

const printStyles = {
  '@media print': {
    fontSize: '6px',
  },
};

// const printHideStyles = {
//   '@media print': {
//     display: 'none',
//   },
// };

const baseFont = {
  marginTop: '-4px',
  // fontSize: 0.6,
  // lineHeight: 1,
};

type NodeType = {
  category: string;
  items: ItemCVProps[];
};

type EdgesType = {
  node: NodeType;
};

const CVPrint = () => {
  const cvQuery: EdgesType[] = useStaticQuery(graphql`
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

  const dataByCategory = cvQuery;

  // const isSingleField = +!!title + +!!subtitle + +!!date + +!!description === 1;
  // const isFirstChild = !id;
  // const paddingTop = +!!title + +!!subtitle + +!!date + +!!description === 1 || !id ? '0' : '2rem';

  const lineStyle = '1px dotted';
  const fontSizeStyle = '11px';
  const paddingTopStyle = '0.3rem';

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme1}>
        <CssBaseline />
        <Container maxWidth="lg">
          <PageTitle>{title}</PageTitle>
          <Box mt={8} sx={{ ...printStyles }}>
            {dataByCategory.map((categoryData, indexCategory) => {
              // const bgColor = index % 2 ? 'white' : 'gray';
              return (
                <>
                  <Box
                    key={`boxCVp-${indexCategory}`}
                    pb={2}
                    sx={{ display: 'flex' }}
                    flexDirection={'row'}
                  >
                    {/* <CvCategory category={categoryData.node.category} id={indexCategory} /> */}
                    <Box
                      py={0}
                      px={4}
                      // pr={{ xs: 0, sm: '10%' }}
                      width={'20%'}
                      justifyContent={'right'}
                      borderRight={lineStyle}
                      borderTop={'none'}
                      sx={{ display: 'flex', lineHeight: 1.2, textTransform: 'uppercase' }}
                      // key={id}
                    >
                      <Typography
                        component="h3"
                        color={Theme1.palette.secondary.main}
                        sx={{ fontWeight: 600, fontSize: fontSizeStyle }}
                      >
                        {categoryData.node.category}
                      </Typography>
                    </Box>
                    <Box pt={0} px={1} width={'80%'}>
                      {categoryData.node.items.map((cvItem, indexItem) => (
                        // <CvItem
                        //   key={`itemCV-${indexCategory}-${indexItem}`}
                        //   {...{ ...cvItem, id: indexItem }}
                        // />
                        <Container
                          // pt={paddingTop}
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
                                  // variant={'h6'}
                                  color={Theme1.palette.secondary.main}
                                  sx={{ fontWeight: 600, fontSize: fontSizeStyle }}
                                >
                                  {cvItem.title}
                                  {/* {Boolean(
                                    +!!cvItem.title +
                                      +!!cvItem.subtitle +
                                      +!!cvItem.date +
                                      +!!cvItem.description ===
                                      1 || !cvItem.id
                                  ).toString()} */}
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
                                // variant="h6"
                                // color={theme.palette.text.hint}
                                sx={{ fontWeight: '300', fontSize: fontSizeStyle }}
                              >
                                {cvItem.date}
                              </Typography>
                            </Box>
                          )}

                          {cvItem.description && (
                            <Box
                              pt={0}
                              // pb={3.5}
                              sx={{
                                marginTop: '1px',
                                display: 'flex',
                                justifyContent: 'start',
                                width: '100%',
                                // fontWeight: 300,
                                // fontFamily: 'Montserrat',
                              }}
                              // fontWeight={100}
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
            {/* <Box sx={{ display: 'flex' }} flexDirection={{ xs: 'column', sm: 'row' }}>
          <CvCategory category={cvCategory} />
          <Box>
            {cvItems.map((cvItem, index) => (
              <CvItem key={index} {...cvItem} />
            ))}
          </Box>
        </Box> */}
          </Box>
          {/* </> */}
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CVPrint;

export const Head = () => <SEO title={title} />;
