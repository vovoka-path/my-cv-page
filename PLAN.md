***
#PLAN
##How create this app.
***

### Common
- ##### Set app initial structure
- [x] Instal Gatsby
- [x] Create PLAN.md
- [x] Create HELP.md
- [x] Set tsconfig.json
- [x] Set .prettierrc.json
- [x] Set .eslintrc.js
- [x] Create hook useSiteMetadata
- [x] Create component SEO
- [x] Create component Logo
- [x] Update app initial structure
- [x] Install gatsby-transformer-json: `npm install gatsby-transformer-json`
- [ ] Doesn't work! Install gatsby-plugin-gatsby-cloud: `npm install --save gatsby-plugin-gatsby-cloud`
- [x] Set gatsby-source-filesystem in gatsby config: `path: './src/data/',`
- [ ] ? Install Typography.js https://kyleamathews.github.io/typography.js/ https://sashko.dev/typography-js/
- ##### Set MaterialUI
- [x] Add MaterialUI: `npm install gatsby-plugin-material-ui@next @emotion/react --legacy-peer-deps`
- [x]  `npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps` 
- [x] Add MaterialUI: `npm install gatsby-theme-material-ui --legacy-peer-deps`
- [x] Add component Theme1
- [ ] ? Install google font: `npm install @fontsource/montserrat --legacy-peer-deps`, `npm install @fontsource/dancing-script --legacy-peer-deps`
- [x] `npm install gatsby-plugin-offline`
- [x] `npm install gatsby-plugin-manifest`
- [x] Setting PWA in gatsby-config
- [x] `npm install gatsby-plugin-sitemap`
- [x] `npm install --save gatsby-plugin-robots-txt`
### Main page
- ##### Create Header
- [x] Create Header
- ##### Create Footer
- [x] Create useElementHeightByTag
- ##### Create components
- [x] Create component Layout

- [ ] Create component Hero
- [x] Create component Skill
- [x] Create component SkillList
- [ ] Create component About
- [ ] Create component Project
- [ ] Create component ProjectList

### CV page
- ##### Create components
- [x] Create component CVItem
### Contacts page
- ##### Create components
- [x] Create component Contact


Remarks:

npm install -g npm-install-peers
npm install --legacy-peer-deps
npm config set legacy-peer-deps true

"gatsby": "^5.0.1",
"@types/react": "^18.0.25",
"@types/node": "^18.11.9",
node: 14.16.1