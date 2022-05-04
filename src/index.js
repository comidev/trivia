import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "App";
import Home from "pages/Home";
import Categories from "pages/Categories";
import Questions from "pages/Questions";
import Results from "pages/Results";
import { UserProvider } from "context/UserProvider";
import UserProtected from "components/UserProtected";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path="" element={<Navigate to="home" replace />} />
                <Route path="/" element={<App />}>
                    <Route index path="home" element={<Home />} />
                    <Route
                        index
                        path="categories"
                        element={
                            <UserProtected>
                                <Categories />
                            </UserProtected>
                        }
                    />
                    <Route
                        index
                        path="questions"
                        element={
                            <UserProtected>
                                <Questions />
                            </UserProtected>
                        }
                    />
                    <Route
                        index
                        path="results"
                        element={
                            <UserProtected>
                                <Results />
                            </UserProtected>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="home" replace />} />
            </Routes>
        </UserProvider>
    </BrowserRouter>
);
