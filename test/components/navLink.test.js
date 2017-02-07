import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import NavLink from "../../src/components/navLink";
import { Link, IndexLink } from "react-router";

describe("NavLinkComponent", () => {
    // "Index" link
    const indexLink = { url: "/", name: "Home" };
    const indexWrapper = shallow(<NavLink link={indexLink} />);

    it("renders an IndexLink if link url === \"/\"", () => {
        expect(
            indexWrapper.find(IndexLink).exists()
        ).to.be.true;
    });


    // "Normal" link
    const normalLink = { url: "/test", name: "Test" };
    const normalWrapper = shallow(<NavLink link={normalLink} />);

    it("renders a \"normal\" link if link url !== \"/\"", () => {
        expect(
            normalWrapper.find(Link).exists()
        ).to.be.true;
    });
});
