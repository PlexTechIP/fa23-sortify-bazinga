import './index.css';
import pltfm from './TestPics/tt.jpg'

const VidPreview = ({img, platform, href}:{img: string, platform: string, href: string}) => {

    const thmbStyle = {
        backgroundImage: `url('${img}')`
    };

    return (
        <div className="VidPreview">
            <a className="Thumbnail" href={href} style={thmbStyle}>
                <img className='Platform' src={pltfm} alt=''/>
            </a>
        </div>
    )
}

export default VidPreview;