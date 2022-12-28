import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NavigatorComponent from "@/components/NavigatorComponent.vue";

describe("Content Component", () => {
  it("renders properly", () => {
    const wrapper = mount(NavigatorComponent);

    expect(wrapper.text()).toContain("Notas fiscais");

    expect(wrapper.findAll("img")).toHaveLength(2);

    expect(wrapper.findAll("img").at(0)?.attributes("src")).toBe(
      "/assets/logo.svg"
    );

    expect(wrapper.findAll("img").at(1)?.attributes("src")).toBe(
      "/assets/iconHands.svg"
    );
  });
});
