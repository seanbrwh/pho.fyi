import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="w-full h-12 bg-cyan-400 fixed bottom-0 flex items-center justify-between px-5">
      <div className="w-1/2">&copy; 2022 Sean White All rights reserved</div>
      <div className="w-1/2 flex justify-around text-3xl text-gray-600">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </footer>
  );
}
