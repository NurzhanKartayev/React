import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result
                    });
                },
            )
    }

    render() {
        const {items} = this.state;
        return (
            <div className="Photos">
                {items.slice(0, 20).map( post => {
                    return(
                        <div key={ post.id }>
                            <h5 className="text-center text-primary" >{ post.title }</h5>
                            <img className=" img-fluid rounded mx-auto d-block" src={ post.url } alt=""/>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Home;
