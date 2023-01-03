import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ContentComponent from "@/components/ContentComponent.vue";

describe("Content Component", () => {
  it("renders properly", () => {
    const wrapper = mount(ContentComponent);

    expect(wrapper.text()).toContain("Notas fiscais");

    expect(wrapper.text()).toContain(
      "Visualize as notas fiscais que você tem."
    );

    expect(wrapper.find("img").attributes("src")).toBe(
      "/assets/iconHandsBlue.svg"
    );
  });
});
