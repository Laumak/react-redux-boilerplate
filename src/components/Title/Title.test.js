import React from "react"
import { mount } from "enzyme"
import { expect } from "chai"
import Title from "./Title"

describe("Title component", () => {
  const wrapper = mount(
    <Title type="h1">Example Title</Title>
  )

  it("renders a desired title element based on the component's type", () => {
    expect(wrapper.find("h1")).to.have.length(1)
  })

  it("renders the desired content inside the title component", () => {
    expect(wrapper.text()).to.equal("Example Title")
  })
})
