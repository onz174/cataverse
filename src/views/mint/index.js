import {useState} from "react"

import { Col, Row } from "react-bootstrap";
import { IMAGES } from "../../utils/images";
import { SocialData } from "../../utils/social";
import './style.css';

const Mint = () => {
    let SocialIcons = SocialData.filter(item => item.alt !== 'raritysniper');

    const [count, setCount] = useState(false)

    const onChangeInput  = (e) => {
        const {value}= e.target
        setCount(value)
    }

    const onClickIncrement = () => {
        setCount(count+1)
    }

    const onClickdecrement = () => {
        if(count > 1) {
            setCount(count-1)
        }else {
            setCount(1)
        }
    }

    return (
        <>
            <div className="top_header">
                <div className="container">
                    <figure><img className="img-fluid" src={IMAGES.LOGO} alt="" /></figure>
                </div>
            </div>

            <section id="mint" className="mint-section">
                {/* <div style={{ backgroundImage: `url(${IMAGES.MINT_BACKGROUND})` }}> */}

                {/* </div> */}

                <div className="container">
                    <ul className="list-unstyled social_icons my-4">
                        {SocialIcons.map((item, index) => (
                            <li key={index}><a href={item.href} target="_blank"><img src={item.image}  alt={item.alt} /></a></li>
                        ))}
                    </ul>

                    <div className="row align-items-start mt-5">
                        
                        <Col md="3" xs="12">
                            <figure className="frame-cate-pic"><img className="w-100" src={IMAGES.CATE_FRAME} alt="" /></figure>
                        </Col>
                        
                        <Col md="9" xs="12">
                            <div className="logo-content">
                                
                                <div className="sec_title">
                                    <h2><em><img src={IMAGES.CAT_LOGO} alt="" /></em> Mint a Cataverse’s CATA</h2>
                                    <span>Coming Soon</span>
                                </div>

                                <div className="input_group">
                                    <div className="d-flex align-items-center flex-wrap justify-content-center justify-content-md-start text_data">
                                        <div className="d-flex align-items-center input_label">
                                            <button onClick={()=>onClickdecrement()}>-</button>
                                            <input type={"number"} value={count} onChange={(e)=>onChangeInput(e)} placeholder="" />
                                            <button onClick={()=>onClickIncrement()} >+</button>
                                        </div>
                                        <button className="btn btn-md btn-blue">Mint Now!</button>
                                    </div>
                                    <p>Total Mint Cost: 0.05 ETH + gas fees</p>
                                </div>

                            </div>
                        </Col>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Mint;