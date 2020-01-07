# Perksy Public Website

Dev branch available at:

<!-- [Netlify deployment of dev branch from Github](https://nifty-swirles-628c96.netlify.com/) (`https://nifty-swirles-628c96.netlify.com/`) - released to team for monitoring. -->

[Amazon S3 Cloud Front](https://dev-go.getperksy.com) (`https://dev-go.getperksy.com`) - takes the dev branch from Gitlab.

## Node Version

Developed on node 12.13.0

`.nvmrc`:

```sh
$ nvm install
```

## Run

```sh
$ yarn
$ yarn run develop
```

## Port

[http://localhost:8000/](http://localhost:8000/)

## SSR

Check the bundler with:

```sh
$ npm run analyze
```

... open `/public/report.html` and visually check for things like lodash, moment etc.

## Build

Note: there is a `"homepage: "."` setting in `package.json`

```sh
$ gatsby build
$ gatsby serve
```

And load `http://localhost:9000/`

## Amazon S3 Cloudfront

https://dev-go.getperksy.com

## Dev Notes

```sh
$ git remote add github https://github.com/Company_Name/repository_name.git

# push master to github
$ git push github master

# Push my-branch to github and set it to track github/my-branch
$ git push -u github my-branch

# Make some existing branch track github instead of origin
$ git branch --set-upstream other-branch github/other-branch
```


### CSS Mapping

Not working to my liking.

`gatsby-plugin-emotion` supports all options defined by `babel-plugin-emotion` plugin.

Tried:

```js
autoLabel: process.env.NODE_ENV !== 'production',
labelFormat: '[local]',
cssPropOptimization: true,
```

### SVG and SVGR

Import SVG as React component with SVGR.

Using `https://www.npmjs.com/package/gatsby-plugin-svgr`

`https://medium.com/@rossbulat/working-with-svgs-in-react-d09d1602a219`

Transform tool - SVG to React: `https://transform.tools`

Ref `https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91`

### React icons

https://www.npmjs.com/package/react-icons

### s3

CI plug for S3

`https://github.com/jariz/gatsby-plugin-s3`

.env

Access code CLI

```
S3_BUCKET_NAME=perksy-ridiculous-bucket
```

### Offline

`gatsby-plugin-offline`

### Spring

https://morioh.com/p/d13ba15ef119

useCallback - takes a function as an argument and returns a cached/memoized version
[] - no dependencies https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/

### todo

proptypes

duplicate styles - mini-hero hero cases

optimize images

redo all stickers for uniform size




### WIP Images

https://stackoverflow.com/questions/57813664/how-to-modify-gatsby-starter-lightbox-to-query-specific-image-directories

### Modal

https://codebushi.com/gatsbyjs-global-state/

### WIP animation

`animated pop image`

### WIP - deploy

removed from package.json: `"gatsby-plugin-s3": "^0.3.2",`

noop: `accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,`

<!-- console.log(process.env.NODE_ENV) -->

https://stackoverflow.com/questions/47086881/setting-environment-variables-in-gatsby

```txt
7 error Problems with gatsby-source-contentful plugin options:
58 spaceId: "*********oaj"
59 accessToken: undefined - "accessToken" is required
60 host (default value): "cdn.contentful.com"
61 environment (default value): "master"
```

### Netlify Deploy

CI - dev branch on Github

https://app.netlify.com/sites/nifty-swirles-628c96/deploys

Deployed to:

https://nifty-swirles-628c96.netlify.com/news/

https://docs.netlify.com/functions/trigger-on-events/#available-triggers

### Hamburger

https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

### Parallax Effect

https://codesandbox.io/embed/r5x34869vq

https://atomizedobjects.com/blog/react/creating-easy-parallax-react-spring-animation/
this.parallax.scrollTo()




### Scroll Snapping

https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/

https://css-tricks.com/practical-css-scroll-snapping/

https://codepen.io/maxakohler/pen/ZjrOpx

### SVGs in React article

https://medium.com/@rossbulat/working-with-svgs-in-react-d09d1602a219

https://helpx.adobe.com/illustrator/using/svg.html

### Emotion Resource

https://medium.appbase.io/part3-home-page-layout-styled-components-emotion-js-85f0de84dfa6

### Contentful

https://www.contentful.com/developers/docs/references/content-delivery-api/

https://cdn.contentful.com/spaces/b0r0shakboaj/environments/master/entries?access_token=Fz5gMRnfQsmmpyvqG30tpCkAPNCguSrdP-lSNdDI1UU

https://images.ctfassets.net/{space_id}/{asset_id}/{token}/{name}

//images.ctfassets.net/b0r0shakboaj/6OrIpVL6kws3afbzeH5HhQ/73451712098b1872afd2bb151b981d45/forbes.png

### Spread Sheet

https://docs.google.com/spreadsheets/d/185zpZLtIynOHI1exujOlaWYl7LATNwaw_6Zt3ZTpz94/edit?ts=5dcb041d#gid=0

### Graphql

`https://stackoverflow.com/questions/48130697/gatsby-graphql-query-for-multiple-images`

`https://stackoverflow.com/questions/11690709/can-a-project-have-multiple-origins`



```
// export default () => {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
      // file(relativePath: { eq: "images/nadia.png" }) {
      //   childImageSharp {
      //     # Specify the image processing specifications right in the query.
      //     fluid {
      //       ...GatsbyImageSharpFluid
      //     }
      //   }
//       }
//     }
//   `)


const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/nadia.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
  `);


  const data = useStaticQuery(graphql`
  query MyQuery {
    image: file(relativePath: { eq: "nadia.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);



const styles = theme => ({
  '@font-face': [
    {
      fontFamily: 'Larsseit',
      fontWeight: '400',
      src: 'url(/static/fonts/Larsseit_Regular.ttf)',
    },
    {
      fontFamily: 'Larsseit_Medium',
      fontWeight: '500',
      src: 'url(/static/fonts/Larsseit_Medium.ttf)',
    },
    {
      fontFamily: 'Larsseit_Bold',
      fontWeight: '700',
      src: 'url(/static/fonts/Larsseit_Bold.ttf)',
    },
  ],

});
```

functional index.js:

```
const Home = () => {
  return (
    <Layout>
      <Hero page="home" />
      <Video />
      <Parallax
        pages={3}
        scrolling={false}
        horizontal
        ref={ref => (parallax = ref)}
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => parallax.scrollTo(1)}>
            Layers can contain anything
          </span>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  );
};
```

class component

```
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Hero page="home" />
        <Video />
        <Parallax
          pages={3}
          scrolling={false}
          horizontal
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0} speed={0.5}>
            <span onClick={() => this.parallax.scrollTo(1)}>
              Layers can contain anything
            </span>
          </ParallaxLayer>
        </Parallax>
      </Layout>
    );
  }
}
```

https://codesandbox.io/embed/1y3yyqpq7q

config.js - google sheets

```
export default {
  // prettier-ignore
  apiKey: 919167549341-ao82i36f72dk6joon22noudbumeu9sk0.apps.googleusercontent.com,
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  spreadsheetId: '185zpZLtIynOHI1exujOlaWYl7LATNwaw_6Zt3ZTpz94',
};
// 919167549341-ao82i36f72dk6joon22noudbumeu9sk0.apps.googleusercontent.com

```
