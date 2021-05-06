import React ,{Component, Fragment} from 'react';
// import './App.css';
import Navbar from './Components/Layout/Navbar';
import Users from './Users/Users'
import User from './Users/User'
import axios from 'axios'
import Search from './Users/Search';
import Alerts from './Components/Layout/Alert';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import About from'./Components/Pages/About';
class App extends Component {
  state={
    users:[],
    user:{},
    repos:[],
    loading :false,
    alert:null,
  }
  // async componentDidMount(){
  //   this.setState({loading:true})
  //   const res= await axios.get(`https://api.github.com/users?CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data,loading:false})
  //   console.log(res.data);
  // }
  searchUsers= async text=>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items,loading:false})

  }
  getUser=async username=>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/users/${username}?CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({user:res.data,loading:false})

  }
  getRepos=async username=>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({repos:res.data,loading:false})

  }
  clearState=()=>this.setState({users:[],loading:false});
  setAlert=(msg,color)=>{
    this.setState({alert:{msg:msg,color:color}})
    setTimeout(()=>this.setState({alert:null}),5000)
  }
  render(){
    const title='Github Finder'
    const icon="fab fa-github"
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar title={title} icon ={icon} />
        <Alerts alert={this.state.alert} />
        <Switch>
        <Route exact path='/' render={props=>(
          <Fragment>
            <Search searchUsers={this.searchUsers}  clearState ={this.clearState} showClear={this.state.users.length>0?true:false} setAlert={this.setAlert} />
            <div className="container"><Users   loading={this.state.loading} users={this.state.users} /></div>
          </Fragment>)
        } />
        <Route exact path='/about' component={About}  />
        {/* <Route exact path=`/user/:login` render={props=>(
          <User {...props} getUser={this.getUser} user={this.state.user} />
        ) } /> */}
        <Route exact path='/user/:login' render={props=>(
            <User {...props} getRepos={this.getRepos} repos={this.state.repos} getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
        )} />
        </Switch>
        
      </div>
      </Router>
    );

  }
}

export default App;
