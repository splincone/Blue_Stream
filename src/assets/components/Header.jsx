export default function Header() {
  return (
    <div className="headerContainer">
      <h1>BLUE STREAM</h1>
      <div className="menuItems">
        <a className="link" href="/home">
          HOME
        </a>
        <a className="link" href="/movies">
          FILM
        </a>
        <a className="link" href="/series">
          SERIE TV
        </a>
        <a className="link" href="/about">
          ABOUT
        </a>
      </div>
    </div>
  );
}
