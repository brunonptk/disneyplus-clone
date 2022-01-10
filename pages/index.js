import { gql, GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import Image from 'next/image'
import video from './video/[slug]'
import Section from "../components/Section"
import NavBar from '../components/NavBar'
import disneyLogo from '../public/disney-button.png'
import marvelLogo from '../public/marvel-button.png'
import dramaLogo from '../public/drama-button.png'
import violenceLogo from '../public/violence-button.png'
import classicLogo from '../public/classic-button.png'
import thrillerLogo from '../public/thriller-button.png'


export const getStaticProps = async () => {
  const url = process.env.ENDPOINT
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": process.env.GRAPH_CMS_TOKEN
    }
  })

  const videosQuery = gql`
    query {
      videos {
        createdAt
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
        
      }
    }
`


  const accountQuery = gql`
  query {
    account(where: { id: "cky25l82806ox0c32nlu1bw45"}) {
      username
      avatar {
        url
      }
    }
    
  }
`

  const data = await graphQLClient.request(videosQuery)
  const videos = data.videos
  const accountData = await graphQLClient.request(accountQuery)
  const account = accountData.account

  return {
    props: {
      videos,
      account
    }
  }
}

const Home = ({ videos, account }) => {

  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * video.length)]
  }

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre))
  }

  const unSeenVideos = (videos) => {
    return videos.filter(video => video.seen == false || video.seen == null)
  }

  const CategoryLogo = ({ className, id, src }) => (
    <>
      <a><div className={className} id={id}>
        <Image src={src} />
      </div>
      </a>
    </>
  )

  return (
    <>
      <NavBar account={account} />
      <div className="app">
        <div className="main-video">
          <img src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).tittle} />
        </div>

        <div className="video-feed">
          <Link href="disney">
            <CategoryLogo className="franchise" id="disney" src={disneyLogo} />
          </Link>
          <Link href="marvel">
            <CategoryLogo className="franchise" id="marvel" src={marvelLogo} />
          </Link>
          <Link href="drama">
            <CategoryLogo className="franchise" id="drama" src={dramaLogo} />
          </Link>
          <Link href="violence">
            <CategoryLogo className="franchise" id="violence" src={violenceLogo} />
          </Link>
          <Link href="classic">
            <CategoryLogo className="franchise" id="classic" src={classicLogo} />
          </Link>
          <Link href="thriller">
            <CategoryLogo className="franchise" id="thriller" src={thrillerLogo} />
          </Link>
        </div>
        <Section genre={'Recommended for you'} videos={unSeenVideos(videos)} />
        <Section id="drama" genre={'Drama'} videos={filterVideos(videos, 'drama')} />
        <Section id="violence" genre={'Violence'} videos={filterVideos(videos, 'violence')} />
        <Section id="marvel" genre={'Marvel'} videos={filterVideos(videos, 'marvel')} />
        <Section id="disney" genre={'Disney'} videos={filterVideos(videos, 'disney')} />
        <Section id="thriller" genre={'Thriller'} videos={filterVideos(videos, 'thriller')} />
        <Section id="classic" genre={'Classic'} videos={filterVideos(videos, 'classic')} />


      </div>


    </>
  )
}

export default Home

