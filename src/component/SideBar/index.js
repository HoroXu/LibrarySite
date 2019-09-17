import React, { useState, useEffect } from "react";
import "./index.less";
import kf from "@/assets/images/kf.png";
import ercode from "@/assets/images/ercode.png";
import phone from "@/assets/images/phone1.png";
import up from "@/assets/images/up.png";
const SideBar = () => {
  return (
    <div className="side-bar-container">
      <ul className="side-bar-ul">
        <li className="side-bar-li" title="客服">
          <img src={kf} />
        </li>
        <li className="side-bar-li" title="二维码">
          <img src={ercode} className='ercode-icon'/>
          <div class="ercode-hover-img">
              <img src={ercode} className='ercode-img'/>
          </div>
        </li>
        <li className="side-bar-li" title="APP/移动图书馆">
          <img src={phone} />


          
        </li>
        <a href="#">
          <li className="side-bar-li" title="回到顶部">
            <img src={up} />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SideBar;
