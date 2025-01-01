# use-boolean-hook

A simple React hook to manage boolean state.

## Installation

\`\`\`bash
npm install use-boolean-hook
# or
yarn add use-boolean-hook
\`\`\`

## Usage

```tsx
import React from "react";
import { useBoolean } from "use-boolean-hook";

function ToggleExample() {
  const { value, onTrue, onFalse, onToggle } = useBoolean(false);

  return (
    <div>
      <p>Value: {value ? "TRUE" : "FALSE"}</p>
      <button onClick={onTrue}>Set True</button>
      <button onClick={onFalse}>Set False</button>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}

export default ToggleExample;
