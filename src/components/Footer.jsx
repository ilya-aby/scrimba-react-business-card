import twitterIcon from '../assets/twitter-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/insta-icon.png';
import githubIcon from '../assets/github-icon.png';

export default function Footer() {

  return (
    <div className="footer-container">
      <img src={twitterIcon} alt="Twitter icon" />
      <img src={facebookIcon} alt="Facebook icon" />
      <img src={instaIcon} alt="Instagram icon" />
      <img src={githubIcon} alt="Github icon" />
    </div>
  )
}