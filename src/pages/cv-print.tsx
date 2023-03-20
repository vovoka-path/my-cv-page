import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '@fontsource/montserrat/latin.css';
import '@fontsource/montserrat/cyrillic.css';
import '@fontsource/dancing-script/latin.css';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby-theme-material-ui';

import Theme1 from '../components/Theme1';
import { ItemCVProps } from '../types/types';
import SEO from '../components/SEO';
// import PageTitle from '../../components/PageTitle';
import useSiteMetadata from '../hooks/useSiteMetadata';
import ImgPhoto from '../components/ImgPhoto';

const title = '(CV на одном листе)';

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

const descriptionLinkStyles = {
  color: Theme1.palette.secondary.dark,
  textDecorationColor: Theme1.palette.secondary.dark,
  fontWeight: '300',
  lineHeight: '1',
  fontSize: fontSizeStyle,
};

const descriptionStyles = {
  fontWeight: '300',
  lineHeight: '1',
  fontSize: fontSizeStyle,
};

type NodeType = {
  category: string;
  items: ItemCVProps[];
};

type EdgesType = {
  node: NodeType;
};

const CVPrint = () => {
  const dataByCategory: EdgesType[] = useStaticQuery(graphql`
    query CvPrintQuery {
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
          <Box mt={4} sx={{ ...printStyles }}>
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
                      borderRight={categoryData.node.category ? lineStyle : 'none'}
                      borderTop={'none'}
                      sx={{ display: 'flex', lineHeight: 1.2, textTransform: 'uppercase' }}
                    >
                      {categoryData.node.category.includes('photo') ? (
                        <ImgPhoto />
                      ) : (
                        <Typography
                          component="h3"
                          color={Theme1.palette.secondary.dark}
                          sx={{ fontWeight: 600, fontSize: fontSizeStyle }}
                        >
                          {categoryData.node.category}
                        </Typography>
                      )}
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
                                flexDirection: 'column',
                                justifyContent: 'start',
                                width: '100%',
                              }}
                            >
                              {/* {cvItem.description.split('\n').map((str: string, key: number) => {
                                return ( */}
                              {cvItem.description_link ? (
                                <Link
                                  // key={key}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={cvItem.description_link}
                                  sx={descriptionLinkStyles}
                                >
                                  {cvItem.description}
                                </Link>
                              ) : (
                                <Typography
                                  // key={key}
                                  component="p"
                                  sx={descriptionStyles}
                                  color={'rgba(51, 51, 51, 0.9)'}
                                >
                                  {cvItem.description}
                                </Typography>
                              )}
                              {/* ); */}
                              {/* })
                              } */}
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
          <Typography
            component="h5"
            sx={{ fontWeight: 300, fontSize: fontSizeStyle, textAlign: 'center' }}
          >
            {'{ '}
            {'For single sheet printing. More about me: '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={useSiteMetadata().siteUrl}
              sx={{
                color: Theme1.palette.secondary.dark,
                textDecorationColor: Theme1.palette.secondary.dark,
                fontWeight: '500',
              }}
            >
              {'vovoka.space'}
            </Link>
            {' }'}
          </Typography>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CVPrint;

export const Head = () => <SEO title={`${useSiteMetadata().title} ${title}`} />;
