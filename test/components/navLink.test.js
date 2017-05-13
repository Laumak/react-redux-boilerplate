import React from "react"
import { shallow } from "enzyme"
import { expect } from "chai"
import NavLink from "../../src/components/navLink"
import { NavLink as RouterNavLink } from "react-router-dom"

describe("NavLinkComponent", () => {
  // "Normal" link
  const link = { url: "/test", name: "Test" }
  const wrapper = shallow(
    <NavLink link={link} />
  )

  it("renders a navigation link", () => {
    expect(
      wrapper.find(RouterNavLink).exists()
    ).to.be.true
  })
})
