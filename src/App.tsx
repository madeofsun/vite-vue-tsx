import { component$ } from "vue-tsx-macros";

import $style from "./App.module.css";

import tsSvg from "./assets/typescript.svg";
import vueSvg from "./assets/vue.svg";

import {
  HelloWorld,
  HelloWorldEmits,
  HelloWorldProps,
} from "./components/HelloWorld";

export default component$().define(function App() {
  const msg: HelloWorldProps["msg"] = "💖 Vite + Vue + TS 💖";

  const onUpdate: HelloWorldEmits["update"] = (value) => {
    console.log(value);
  };

  return () => (
    <>
      <div>
        {[
          { href: "https://vitejs.dev", img: "/vite.svg" },
          { href: "https://vuejs.org", img: vueSvg },
          { href: "https://typescriptlang.org", img: tsSvg },
        ].map(({ href, img }) => {
          return (
            <a href={href} target="_blank" rel="noreferrer">
              <img src={img} class={$style.logo} alt="Vite logo" />
            </a>
          );
        })}
      </div>
      <HelloWorld msg={msg} onUpdate={onUpdate} />
    </>
  );
});
