import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="User__container">
        <p>
          Let's find your
          <br /> <span className="Bold__span">favourite plants</span>
        </p>
        <div className="User__container-img">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
            alt="user logo"
          />
        </div>
      </div>

      <div className="Search__container">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          alt="search icon"
        />
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}

export { Header };
