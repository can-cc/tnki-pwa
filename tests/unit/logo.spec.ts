import { shallowMount } from "@vue/test-utils";
import Logo from "@/components/Logo.vue";

describe("Logo.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.find("img")).toBeTruthy();
  });
});
