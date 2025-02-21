import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./contexts/DataProvider.js";
import { AuthProvider } from "./contexts/AuthProvider.js";
import { UserProvider } from "./contexts/UserDataProvider.js";
import { AddressProvider } from "./contexts/AddressProvider.js";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <UserProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </UserProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
