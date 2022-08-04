import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import Layout from "../layout/Layout";
import List from "../list/List";

function Todo() {

    return (
        <div>
            <Layout>
            <Header />
            <Form />
            <List />
            </Layout>
        </div>
    )
}

export default Todo