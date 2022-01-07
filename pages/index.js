import { gql, GraphQLClient } from 'graphql-request'
import Link from 'next/Link'
import Image from 'next/Image'
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

  return (
    <>
      <NavBar account={account} />
      <div className="app">
        <div className="main-video">
          <img src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).tittle} />
        </div>

        <div className="video-feed">
          <Link href="disney"><div className="franchise" id="disney">
            <Image src={disneyLogo} />
          </div>
          </Link>
          <Link href="marvel"><div className="franchise" id="marvel">
            <Image src={marvelLogo} />
          </div></Link>
          <Link href="drama"><div className="franchise" id="drama">
            <Image src={dramaLogo} />
          </div></Link>
          <Link href="violence"><div className="franchise" id="violence">
            <Image src={violenceLogo} />
          </div></Link>
          <Link href="classic"><div className="franchise" id="classic">
            <Image src={classicLogo} />
          </div></Link>
          <Link href="thriller"><div className="franchise" id="thriller">
            <Image src={thrillerLogo} />
          </div></Link>
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

