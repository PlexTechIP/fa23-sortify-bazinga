import ControlCenter from "../../components/ControlCenter"
import Navbar from "../../components/Navbar"
import VidPreview from "../../components/vidPreview"
import SocialMenu from "../../components/SocialMenu"
import "./VideoListing.css"

function VideoListing() {
    const arrr = [
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },

        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },

        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        },
        {
            img: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg',
            platform: 'https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png',
            href: 'https://www.davelabowitz.com/wp-content/uploads/Sisyphus-e1557869810488.jpg'
        },
        {
            img: 'https://static01.nyt.com/images/2023/04/20/fashion/20HASBULLA/20HASBULLA-superJumbo.jpg?quality=75&auto=webp',
            platform: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png',
            href: 'https://www.dni.gov/nctc/groups/hizballah.html'
        }
    ]

    return (
        <div className="Background">
            <Navbar />
            <div className="Flex">
                <SocialMenu />
                <div className="Library">
                    <div className='ControlCenter'><ControlCenter recommended={['a', 'a', 'a.', 'a']} /></div>
                    <div className="flex-grid">
                        {
                            arrr.map((element) => {
                                return (
                                    <VidPreview href={element.href} img={element.img} platform={element.platform} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoListing