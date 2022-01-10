import Card from './Card'
import Link from 'next/link'


const Section = ({ genre, videos }) => {
    return (
        <div className="section">
            <h3>{genre}</h3>
            <div>
                {videos.map(video => (
                    <Link href={`/video/${video.slug}`} key={video.id} >
                        <a key={video.id} >
                            <Card thumbnail={video.thumbnail} />
                        </a>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Section