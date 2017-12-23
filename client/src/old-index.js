import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//declare class component
//extends Component is what make's is a class-Component
//"extends Component" works as well
class App extends React.Component   {
    constructor(props)  {
        //this super function is what extends our class, it's great
        super(props);
        this.state = {
            gifs: []
        };
    }

    //a "lifecycle method", calls after the component is rendered
    //(constructor is also a lifecycle method)
    componentDidMount() {
        for(let i = 0; i<16; i++) {
            axios.get('https://api.giphy.com/v1/gifs/random?api_key=q7PI8yN0CPg0ujv6Lo4ps93qtCvWJS8S&tag=&rating=G')
                .then( res => {
                    let tempArr = this.state.gifs.slice()
                    tempArr.push(res.data.data.image_original_url)
                    this.setState({ gifs: tempArr })
                });
        }
    }

    render() {
        return(
        <div class="">
            <GifGrid gifs={this.state.gifs}></GifGrid>
        </div>
    )}
}

//a function component
function GifGrid(props) {
    return(
        <div class="container">
            <div class="row">
                {props.gifs.map((gif,index) => <Gif key={index} gif={gif}></Gif>)}
            </div>
        </div>
    )
}

const Gif = (props) => {

    return(
        <div class="col-6">
            <img class='img-fluid img-col'key={props.id} alt=' ...the gif goes here' src={props.gif}></img>
        </div>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
