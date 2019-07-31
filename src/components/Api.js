import React, { Component } from 'react';
import axios from 'axios';

export default class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            name: ''
        }
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    }


    getPosts = () => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.name}&api-key=8ElS0akAhGS9prX1pHBUUdK4oRgraDfZ`)
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data.response.docs));
                console.log(data);
                this.setState({
                    posts: data.slice()
                });
            })
    }

    render() {
        let postList = this.state.posts.map(
            p => (
                <div key={p.abstract}>
                    Abstract: {p.abstract}<br />
                    News Desk: {p.news_desk}<br />
                    Section Name:{p.section_name}<br />
                    Type:{p.type_of_material}
                    <hr />
                </div>
            )

        );

        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <h4>Search</h4>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        <h6>From</h6>
                        <h6>To</h6>
                    </div>
                    <div className='col'>
                        <h4>Filter</h4>
                        <div className='row'>
                            <h6 className='col'>News Desk</h6>
                            <h6 className='col'> Section</h6>
                            <h6>Type</h6>
                        </div>

                    </div>

                </div>



                <div>
                    <button onClick={this.getPosts}>
                        Search
                </button>
                    {postList}
                </div>
            </div>
        )
    }
}