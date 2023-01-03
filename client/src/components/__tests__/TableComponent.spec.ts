import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import TableComponent from "@/components/TableComponent.vue";

describe("Content Component", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(TableComponent);

    expect(wrapper.findAll("th")).toHaveLength(6);

    expect(wrapper.findAll("th").at(0)?.text()).toBe("NOTA FISCAL");
    expect(wrapper.findAll("th").at(1)?.text()).toBe("SACADO");
    expect(wrapper.findAll("th").at(2)?.text()).toBe("CEDENTE");
    expect(wrapper.findAll("th").at(3)?.text()).toBe("EMISSÃO");
    expect(wrapper.findAll("th").at(4)?.text()).toBe("VALOR");
    expect(wrapper.findAll("th").at(5)?.text()).toBe("STATUS");
  });
});
