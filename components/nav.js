import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  const locale = "en";
  function setLang() {
    console.log(window.locales.value)
  }

  return (
    <div>
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="uk-navbar-nav">
            <li>
              <select
                name="locales"
                id="locales"
                onChange={setLang}
                value={locale}
              >
                <option value="en">English</option>
                <option value="ru">Русский</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`} className="uk-link-reset">
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;