import React from "react"
import { mount } from "enzyme"
import { expect } from "chai"
import Button from "./Button"

describe("Button component", () => {
  let wrapper = mount(
    <Button theme="primary">Button Text</Button>
  )

  it("renders the desired content inside the Button component", () => {
    expect(wrapper.text()).to.equal("Button Text")
  })

  it("themes the Button properly based on the given theme", () => {
    expect(
      wrapper.find(".is-primary")
    ).to.have.length(1)
  })

  it("renders a left icon if iconLeft prop is given", () => {
    wrapper = mount(
      <Button iconLeft="plus" theme="primary">
        Button Text
      </Button>
    )

    expect(
      wrapper.find(".fa-plus")
    ).to.have.length(1)
  })

  it("renders a right icon if iconRight prop is given", () => {
    wrapper = mount(
      <Button iconRight="plus" theme="primary">
        Button Text
      </Button>
    )

    expect(
      wrapper.find(".fa-plus")
    ).to.have.length(1)
  })
})
