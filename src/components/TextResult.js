import React from 'react'


class TextResult extends React.Component{
 

    render(){
        const {score} = this.props
        return(
            <div className="text_result__container">
                <div className="top_div__container">
                    
                </div>
                <div className="score_div__container">
                    <h3>{`Score:${score}`}</h3>
                </div>
            </div>
        )
    }
}

export default TextResult