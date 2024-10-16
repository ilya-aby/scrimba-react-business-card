export default function Info() {

  return (
    <div className="info-container">
      <img src='./src/assets/profile-pic.jpg' alt="Profile picture" />
      <h1>Mazie Rose</h1>
      <h2>Treat Enjoyer</h2>
      <a href="https://mazie.dog"><h3>www.mazie.dog</h3></a>
      <a href="mailto:mazie@mazie.dog">
        <button>
          <img src='./src/assets/mail-icon.png' alt="Email" />
          Email this Dog
        </button>
      </a>
    </div>
  )
}
