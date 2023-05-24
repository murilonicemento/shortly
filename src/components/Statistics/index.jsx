import { MyStatistics, Dashboards } from "./styled";
import brandRecognition from "../../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../../assets/images/icon-fully-customizable.svg";

export function Statistics() {
  return (
    <MyStatistics>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <Dashboards>
        <span>
          <div>
            <img src={brandRecognition} alt="Icon Brand Recognition" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boast your brand recognition with coach click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </span>
        <div></div>
        <span>
          <div>
            <img src={detailedRecords} alt="Icon Brand Recognition" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </span>
        <div></div>
        <span>
          <div>
            <img src={fullyCustomizable} alt="Icon Brand Recognition" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </span>
      </Dashboards>
    </MyStatistics>
  );
}
