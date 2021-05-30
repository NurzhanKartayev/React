import React, {Component} from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        posts: result
                    });
                },
            )
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="Posts">
                {posts.slice(0, 20).map(post => {
                    return(
                        <div key={ post.id }>
                            <h5 className="p-3 mb-0 bg-secondary text-white"><span className="text-dark">Title :</span> { post.title }</h5>
                            <h5 className="p-3 mb-2 bg-info text-white"><span className="text-dark">Post :</span> { post.body }</h5>
                            &nbsp;
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Posts;
