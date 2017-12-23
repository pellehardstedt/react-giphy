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

        this.handleScroll = this.handleScroll.bind(this);
        this.updateGifs = this.updateGifs.bind(this);
        window.addEventListener("scroll", this.handleScroll);

        this.state = {
            gifs: []
        };
    }

    handleScroll()  {
        if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight) {
            console.log("end of page")
            this.getGifs(4);
        }
    }

    //a "lifecycle method", calls after the component is rendered
    //(constructor is also a lifecycle method)
    componentDidMount() {
        this.getGifs(4);
    }

    getGifs(numberOfGifs)   {
        for(let i = 0; i<numberOfGifs; i++) {
            axios.get('https://api.giphy.com/v1/gifs/random?api_key=q7PI8yN0CPg0ujv6Lo4ps93qtCvWJS8S&tag=&rating=G')
                .then( res => {
                    let tempArr = this.state.gifs.slice()
                    // tempArr.push(res.data.data.fixed_width_small_url)
                    tempArr.push(res.data.data.image_original_url)
                    this.setState({ gifs: tempArr })
                });
        }
    }

    updateGifs()    {
        let numberOfGifs = this.state.gifs.length
        this.setState({ gifs: [] });
        this.getGifs(numberOfGifs);
    }

    render() {
        return(
        <div>
            <GifGrid handler={this.updateGifs} gifs={this.state.gifs}></GifGrid>
        </div>
    )}
}

//a function component
function GifGrid(props) {

    return(
        <div className="container">
            <button onClick={props.handler}>Refresh</button>
            <div className="row">
                {props.gifs.map((gif,index) => <Gif key={index} gif={gif}></Gif>)}
            </div>
        </div>
    )
}

const Gif = (props) => {
    return(
        <div className="col-6   ">
            <img className='img-fluid img-col'key={props.id} alt=' ...the gif goes here' src={props.gif}></img>
        </div>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
