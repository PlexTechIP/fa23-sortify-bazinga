import './index.css';

const SocialMenu = () => {
    return (
        <div className="MenuParent">
            <div className="PlatformLogo">
                <button className='media' id='insta'><img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png" /></button>
                <button className='media' id='tiktok'><img src="https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png" /></button>
                <button className='media' id='youtube'><img src="https://freelogopng.com/images/all_img/1656501968youtube-icon-png.png" /></button>
            </div>
        </div>
    )
}

export default SocialMenu;