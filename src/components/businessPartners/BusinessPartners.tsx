import React from "react";
import { Divider,Row,Col } from 'antd';
import styles from './BusinessPartners.module.css'

import image1 from '../../assets/microsoft-80658_640.png';
import image2 from '../../assets/icon-720944_640.png';
import image3 from '../../assets/follow-826033_640.png';
import image4 from '../../assets/facebook-807588_640.png';

const companies = [
    { src: image1, title: "Microsoft"},
    { src: image2, title: "Youtube"},
    { src: image3, title: "Ins"},
    { src: image4, title: "Facebook"}
]

export const BusinessPartners:React.FC = (props) => {
    return (
        <div className={styles.content}>
             <Divider orientation="left">Left Text</Divider>
             <Row>
                {companies.map((item,index) => (
                <Col span={6} key={"bussiness-partner-"+index}>
                    <img
                    src={item.src}
                    style={{
                        width:'80%',
                        display:'block',
                        marginLeft:"auto",
                        marginRight:"auto"
                    }}
                    />
                </Col>
                ))}
             </Row>
        </div>
    )
}