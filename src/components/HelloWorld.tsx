import { ref } from "vue";
import { component$ } from "vue-tsx-macros";

import $style from "./HelloWorld.module.css";

export type HelloWorldProps = {
  msg?: string;
};

export type HelloWorldEmits = {
  update: (value: number) => void;
};

export const HelloWorld = component$<HelloWorldProps, HelloWorldEmits>()
  .withDefaults({
    msg: "HelloWorld",
  })
  .define((props, { emit }) => {
    const count = ref(0);

    const handleClick = () => {
      count.value += 1;
      emit("update", count.value);
    };

    return () => (
      <>
        <h1>{props.msg}</h1>
        <div class={$style.readTheDocs}>
          <button type="button" onClick={handleClick}>
            count is {count.value}
          </button>
          <p>
            Edit <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>
      </>
    );
  });
