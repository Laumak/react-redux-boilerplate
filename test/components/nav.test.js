import React from "react"
import { shallow } from "enzyme"
import { expect } from "chai"
import Nav from "../../src/components/nav"

const links = [
  {
    url: "/",
    name: "Home",
  }, {
    url: "/counter",
    name: "Counter",
  },
]

describe("NavComponent", () => {
  const wrapper = shallow(
    <Nav links={links} />
  )

  it("renders a list of links", () => {
    expect(
      wrapper.find("ul").children().length
    ).to.be.gt(0)
  })
})
