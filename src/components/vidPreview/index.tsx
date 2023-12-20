import './index.css';

const VidPreview = ({img, platform, href}:{img: string, platform: string, href: string}) => {

    const thmbStyle = {
        backgroundImage: `url('${img}')`
    };

    return (
        <div className="VidPreview">
            <a className="Thumbnail" href={href} style={thmbStyle}>
                <img className='Platform' src={platform} alt=''/>
            </a>
        </div>
    )
}

export default VidPreview;