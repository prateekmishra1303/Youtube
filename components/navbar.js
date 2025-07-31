const navbar = () => {
    return `<div id="navbar">
        <div id="lhs">
            <img id="icon1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" />
            <img id="icon2" src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Logo.wine.svg" />
        </div>

        <div id="middle">
            <input type="text" id="search_term" />
            <button id="search">Search</button>
            <button id="toggle-dark">Toggle Dark Mode</button>
        </div>

        <div id="rhs">
            <a href="auth.html">
                <img src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="Login" id="login-icon" />
            </a>
        </div>
    </div>
 
    `;
 
};

export { navbar };