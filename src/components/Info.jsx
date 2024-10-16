import profilePic from '../assets/profile-pic.jpg';
import mailIcon from '../assets/mail-icon.png';

export default function Info() {

  return (
    <div className="info-container">
      <img src={profilePic} alt="Profile picture" />
      <h1>Mazie Rose</h1>
      <h2>Treat Enjoyer</h2>
      <a href="https://mazie.dog"><h3>www.mazie.dog</h3></a>
      <a href="mailto:mazie@mazie.dog">
        <button>
          <img src={mailIcon} alt="Email" />
          Email this Dog
        </button>
      </a>
    </div>
  )
}
