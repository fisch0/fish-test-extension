/**
 * fish-test-extension — minimal test extension
 *
 * Registers:
 *   1. A view node ("Test View") that renders a greeting + timestamp
 *   2. A provider that wraps children with a colored border
 *
 * Both use window.Fish.libs.React to create elements (no bundler).
 */
(function () {
  const ctx = window.Fish.ctx();
  const React = window.Fish.libs.React;

  // ── View Node ────────────────────────────────────────────────────

  function TestViewNode() {
    const [count, setCount] = React.useState(0);

    return React.createElement(
      "div",
      {
        style: {
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          height: "100%",
        },
      },
      React.createElement(
        "h3",
        { style: { margin: 0, fontSize: "14px", fontWeight: 600 } },
        "Test Extension"
      ),
      React.createElement(
        "p",
        { style: { margin: 0, fontSize: "12px", opacity: 0.7 } },
        "If you can see this, the plugin system works."
      ),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "8px" } },
        React.createElement(
          "button",
          {
            onClick: function () { setCount(function (c) { return c + 1; }); },
            style: {
              padding: "4px 12px",
              borderRadius: "4px",
              border: "1px solid currentColor",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
              fontSize: "12px",
            },
          },
          "Clicked: " + count
        )
      ),
      React.createElement(
        "p",
        { style: { margin: 0, fontSize: "11px", opacity: 0.5 } },
        "Loaded at: " + new Date().toLocaleTimeString()
      )
    );
  }

  ctx.viewNodes.register({
    id: "fish-test-extension.test-view",
    name: "Test View",
    description: "A test view node from fish-test-extension",
    category: "Test",
    component: TestViewNode,
  });

  // ── Provider ─────────────────────────────────────────────────────

  function TestProvider(props) {
    return React.createElement(
      "div",
      {
        style: {
          border: "2px solid #22c55e",
          borderRadius: "6px",
          position: "relative",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: "-10px",
            left: "8px",
            background: "#22c55e",
            color: "#000",
            fontSize: "10px",
            fontWeight: 600,
            padding: "1px 6px",
            borderRadius: "3px",
            zIndex: 1,
          },
        },
        "Test Provider Active"
      ),
      props.children
    );
  }

  ctx.providers.register({
    id: "fish-test-extension.test-provider",
    component: TestProvider,
  });

  console.log("[fish-test-extension] Registered view node and provider.");
})();
