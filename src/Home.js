// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './UseFetch';

const Home = () => {
    // let name = 'mario';

    //  const [name, setName] = useState('mario');
    //  const [age, setAge] = useState(25);
    //  const [mario, setMario] = useState(false);

    // const handleClick = () => {
    //     if(mario) {
    //         setName('luigi');
    //         setAge(30);
    //         setMario(false);
    //     } else {
    //         setName('mario');
    //         setAge(25);
    //         setMario(true);
    //     }
    // }

    // const handleClickAgain = (name) => {
    //     console.log("hello " + name);
    // }

    

    // const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        // const newBlogs = blogs.filter(blog => blog.id !== id)
        // setBlogs(newBlogs);
    }

   const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    // useEffect(() => {
    //     console.log("use effect run");
    // }, [name]);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}


            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p> */}

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Marios Blogs"/> */}

            {/* <h2>Home Page</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={() => handleClickAgain('mario')}>Click me again</button> */}
        </div> 
    );
}
 
export default Home;