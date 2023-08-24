import React, {useState} from "react"
import axios from "axios"
import Footer from "./Footer"
import "../style/posts.css"

function Posts() {
    var [data, setData] = useState(null)

    function getCurrentPosts() {
        // const dateTime = new Date().getTime();
        // var currentTimeStamp =  Math.floor(dateTime / 1000);
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40leo3590581&api_key=ppvfq9mwaenftmxqifuwikgnv8sygeznswyvop6k').then(res => {
            setData(res.data.items)
        })
    }

    const Getposts = ({datas}) => (
        <>
            {datas.map(data => (
                <div key={data.guid}>
                    <a className="post_a" href={data.link} target="_blank" rel="noreferrer">
                        <div className="post__container">
                            <div className="post_text">
                                <h3>{data.title.split(" ")}</h3>
                                <div className="catagories">
                                    {data.categories.map(cata => (
                                        <h5 key={cata} className="cata">{cata}</h5>
                                    ))}
                                    <h5 className="date">{data.pubDate.split(" ")[0]}</h5>
                                </div>
                            </div>
                            <img className="posts__img"  src={data.thumbnail} alt="thumb-nail"></img>
                        </div>
                    </a>
                </div>
            ))}
        </>
    )

    return (
        <>
            <section id="posts">   
                <div className="container container__posts">
                    <div className="text__container">
                        <h4>Oh you are here</h4>
                        <h1>Just some random thoughts from me</h1>
                    </div>

                </div>

                <div className="container container__posts">
                    {data? <Getposts datas = {data} />:getCurrentPosts()}
                </div>

                <Footer />
            </section>
        </>
    )
}

export default Posts;