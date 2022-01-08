//making the component
class Dashboard extends React.Component {
    render(){
        return(
            <div id="dashboard">
            <ul>
                <li>Dashboard</li>
                <li>Widget</li>
                <li>Reviews</li>
                <li>Customers</li>
                <li>Online Analysis</li>
                <li>Settings</li>
            </ul>
        </div>
        )
    }
}

class Reviews extends React.Component {
    render() {
        return(
            <div id="reviews">
            <p>Reviews</p><h1>1,281</h1>
        </div>
        )
    }
}
class Ratings extends React.Component {
    render() {
        return(
            <div id="ratings">
            <p>Average Rating</p>
        </div>
        )
    }
}
class Analysis extends React.Component {
    render(){
        return(
        <div id="analysis">
        <p>Sentiment Analysis</p>
    </div>
        )
    }
}
class Visitors extends React.Component {
    render(){
        return(
            <div id="visitors">
                <p>Website Visitors</p>
                <div id="box"></div>
            </div>
        )
    }
}

//passing the component 
class App extends React.Component {
    render() {
        return(
            <div>
            <Dashboard />
            <div class="group1"> 
            <Reviews />
            <Ratings />
            <Analysis />
            </div>
            <Visitors />

            </div>
                
        )
    }
    
}
ReactDOM.render(
    <App />,
     document.querySelector('.container')
    );



    