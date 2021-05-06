import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert!==null && (
            <div className={`alert alert-${alert.color}`}>
                <i className="fas fa-info-circle"></i>&nbsp;{alert.msg}
            
        </div>
        )
    )
}
export default Alert
