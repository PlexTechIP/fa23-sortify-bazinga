import './index.css';

const VidPreview = ({ img, platform, href }: { img: string, platform: string, href: string }) => {

    const thmbStyle = {
        backgroundImage: `url('${img}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    return (
        <div className="VidPreview">
            <a className="Thumbnail" href={href} style={thmbStyle}>
                <img className='Platform' src={platform} alt={href} />
            </a>
        </div>
    )
}

export default VidPreview;