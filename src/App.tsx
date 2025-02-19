import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

import { FranconeriShowHypergraph } from "./input-franconeri-show";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardParentFocus
      nodeGraph={FranconeriShowHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
