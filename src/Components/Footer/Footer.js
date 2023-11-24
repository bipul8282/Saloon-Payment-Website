
import React from "react";
import style from "./Footer.module.css";
import {InstagramOutlined, FacebookFilled , YoutubeFilled} from '@ant-design/icons'
function CustomFooter() {
  return <footer>
    <div className={style.waves}>
    <div className={style.wave} id={style.wave1}>
      </div>
      <div className={style.wave} id={style.wave2}>
      </div>
      <div className={style.wave} id={style.wave3}>
      </div>
      <div className={style.wave} id={style.wave4}>
      </div>
      </div>
    <ul className={style.socialIcon}>
      <li><a href="https://www.instagram.com/bipul5687/" target='_blank' rel="noreferrer">  <InstagramOutlined style={{ fontSize: '32px', color: '#000' }}/></a></li>
      <li><a  href="https://www.facebook.com/bipulkumar.kumar.56" target='_blank' rel="noreferrer"><FacebookFilled  style={{ fontSize: '32px', color: '#000' }}/></a></li>
      <li><a href="/"><YoutubeFilled   style={{ fontSize: '32px', color: '#000' }}/></a></li>
    </ul>

    <p>
    © 2023 Hair Saloon Zone | Developed By Bipul | All Rights Reserved
    </p>
  </footer>;
}

export default CustomFooter;
