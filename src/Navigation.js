import React from "react";
import { Link, Match } from "@reach/router";

const NavLink = ({ text, route, active }) => (
  active ? <span>{text}</span> : <Link to={route}>{text}</Link>
)

const Navigation = () => (
  <nav data-testid="navigation" className="Navigation">
    <Match path="/">
    {({ match }) => <NavLink text="Home" route="/" active={match} />}
    </Match>{" "}
    |{" "}
    <Match path="/todos">
    {({ match }) => <NavLink text="Todos Example" route="/todos" active={match} />}
    </Match>
  </nav>
);

export default Navigation;
