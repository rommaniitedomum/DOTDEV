import React from "react";
import {
  House,
  PhoneCall,
  HandshakeIcon,
  BarChartHorizontalIcon,
} from "lucide-react";

import "./Popupbox.css";

const Popupbox = () => {
  return (
    <div className="grid-line">
      <div className="grid-item">
        <div className="products">
          <div className="product-nav-link">
            <button>
              <House size={60} />
            </button>
            <span>Where</span>
          </div>
          <div className="product-nav-link">
            <button>
              <PhoneCall size={60} />
            </button>
            <span>Phonecall</span>
          </div>
          <div className="product-nav-link">
            <button>
              <HandshakeIcon size={60} />
            </button>
            <span>Contact</span>
          </div>
          <div className="product-nav-link">
            <button>
              <BarChartHorizontalIcon size={60} />
            </button>
            <span>Our-Work </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupbox;
