import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TableComponent from "@/components/TableComponent.vue";

describe("Content Component", () => {
  it("renders properly", async () => {
    const wrapper = mount(TableComponent);

    expect(wrapper.exists()).toBe(true);
  });
});
