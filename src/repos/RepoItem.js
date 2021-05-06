import React from 'react'

const RepoItem = ({repo}) => {
    return (
        <div className='card my-2 py-2'>
            <a href={repo.html_url} key={repo.id}>{repo.name}</a>
        </div>
    )
}

export default RepoItem
