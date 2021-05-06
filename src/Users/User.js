import React, { Component, Fragment } from 'react';
import {Link } from 'react-router-dom'
import Repos from '../repos/Repos'
export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getRepos(this.props.match.params.login)
    }
    render() {
        const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,company,hireable}=this.props.user;

        if (this.props.loading) {
            return <div style={{display: "block"}} className='my-3 spinner-grow text-dark mx-auto'></div>
        } 
        else
        {return (
            <Fragment>
                <Link to='/' className='btn btn-secondary'>Back to Search</Link>
                &nbsp;&nbsp;&nbsp;Hireable : {' '}
                {hireable?<i className='fas fa-check text-success'></i>: <i className='fas fa-times-circle text-danger'></i>}
                <div className="card ml-1 mt-4">
                    <div className="row">
                    <div className="all-center col-sm-6 mt-3">
                        <img src={avatar_url} alt="" className='rounded-circle ml-3' style={{width:'150px'}} />
                        <h1 className='mt-3'>{name}</h1>
                        <p  className='mt-3'>Location : {location}</p>

                    </div>
                    <div className='col-sm-6 mt-3'>
                        {bio &&<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>}
                        <a href={html_url} rel="noreferrer" target='_blank' className='btn btn-dark'>Visit Github Profile</a>
                        <ul style={{listStyleType:'none'}}>
                            <li>
                            {login &&<Fragment>
                            <strong>Username : </strong>{login}
                            </Fragment>}
                            </li>
                            <li>
                            {company &&<Fragment>
                            <strong>Company : </strong>{company}
                            </Fragment>}
                            </li>
                            <li>
                            {blog &&<Fragment>
                            <strong>Blog : </strong><a rel="noreferrer" target='_blank' href={blog} className='btn'>{blog}</a>
                            </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="text-center card mt-3" >
                   <div className='card-body'>
                    <span className="badge py-2 px-2  my-1 mx-2 badge-primary">Followers : {followers}</span>
                    <span className="badge py-2 px-2 my-1 mx-2 badge-danger">Following : {following}</span>
                    <span className="badge py-2 px-2 my-1 mx-2 badge-success">Public Repos : {public_repos}</span>
                    <span className="badge py-2 px-2 my-1 mx-2 badge-dark">Public Gists : {public_gists}</span></div>
                    
                    
                </div>
                <h3>Latest 5 Repos</h3>
                <Repos repos={this.props.repos} />
            </Fragment>
        )}
    }
}

export default User
