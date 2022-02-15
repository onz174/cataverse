import { IMAGES } from "../../utils/images";
import { SocialData } from "../../utils/social";
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="f_top_sec">
                <div className="container-fluid">
                    <div className="nft_logo d-flex justify-content-md-end align-items-center">
                        <span>As seen on</span>
                        <a rel="noreferrer" target="_blank" href="https://nftcalendar.io/event/cataverse-club/">
                            <img
                                src={IMAGES.NftLogo}
                                alt=""
                                className='img-fluid'
                            />                            
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <div className="f_sec">
                                <em><img src={IMAGES.FOOTER_LOGO} className="img-fluid" alt="" /></em>
                                <p>Copyright © 2022 Cataverse All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled social_icons ms-0 my-2 text-center text-md-end">
                                {SocialData.map((item, index) => (
                                    <li key={index}><a href={item.href} rel="noreferrer" target="_blank"><img src={item.image} alt={item.alt} /></a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;