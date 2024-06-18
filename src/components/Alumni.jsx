import "../css/general-css/global.css";
import "../css/component-css/alumni.css";
import Company from "./Company";
import delloiteLogo from "../img/company-logo/delloiteLogo.png";
import pertsolLogo from "../img/company-logo/pertsolLogo.png";
import netSPILogo from "../img/company-logo/netSPILogo.png";
import zscalerLogo from "../img/company-logo/zscalerLogo.svg";
import juspayLogo from "../img/company-logo/juspayLogo.png";

export default function Explore(props) {
  return (
    <section className="alumni">
      <div className="heading">
        <p className="heading-secondary">{props.heading}</p>
      </div>
      <div className="container company-image">
        <Company source={delloiteLogo} alt="Delloite Non Copyright Logo" />
        <Company source={pertsolLogo} alt="Pert Sol Non Copyright Logo" />
        <Company source={netSPILogo} alt="NetSPI Non Copyright Logo" />
        <Company source={zscalerLogo} alt="ZScaler Non Copyright Logo" />
        <Company source={juspayLogo} alt="ZScaler Non Copyright Logo" />
      </div>
    </section>
  );
}
