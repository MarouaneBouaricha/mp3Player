const PlayButton = (props) => {
    const className = props.isMusicPlaying ? 'play active' : 'play';
    return (
        <a onClick={props.onClick} href="#" title="Play Video" className={ className }/>
    );
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMusicPlaying: false };
    }

    
    handleClick() {
        if (this.state.isMusicPlaying) {
            this.audio.pause();
            console.log(this.audio);
        } else {
            this.audio.play();
            console.log(this.audio);
        }

        this.setState(prevState => {
            return { 
                isMusicPlaying: !prevState.isMusicPlaying   
            };
        });
    };

    render() {
        let status = this.state.isMusicPlaying 
            ? 'Playing :)' 
            : 'Not playing :(';
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>{ status }</h1>
                <PlayButton onClick={this.handleClick.bind(this)} isMusicPlaying={this.state.isMusicPlaying}/>
                <audio id="audio" ref={(audioTag) => { this.audio = audioTag }}/>     
            </div>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Container/>, root);