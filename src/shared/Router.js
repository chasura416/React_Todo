import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../components/pages/DetailPage";
import Todo from "../components/todo/Todo";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/DetailPage" element={<DetailPage />} />
                <Route path="/DetailPage/:id" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;