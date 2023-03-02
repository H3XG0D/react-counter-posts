import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App(props) {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'This language is bad...'},
        {id: 2, title: 'Python', body: 'This is best language!'},
        {id: 3, title: 'Golang', body: 'I dont know that shit.'}
    ])

    const [posts2, setPosts2] = useState([
        {id: 1, title: 'C#', body: 'This language is bad...'},
        {id: 2, title: 'C++', body: 'This is best language!'},
        {id: 3, title: 'Java', body: 'I dont know that shit.'}
    ])

    return (
        <div className="App">
            <PostList posts={posts} title="Part 1. Language"/>
            <PostList posts={posts2} title="Part 2. Other language"/>
        </div>
    );
}

export default App;
