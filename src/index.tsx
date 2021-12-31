import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

// Rinkeby Chain Id
const supportedChainIds = [4];

const connectors = {
  injected: {},
};

// Finally, wrap App with ThirdwebWeb3Provider.
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
