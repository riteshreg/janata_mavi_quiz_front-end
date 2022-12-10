import React from 'react'

class TextResult extends React.Component{
 

    render(){
        const {score} = this.props
        return(
            <div className="text_result__container">
                <div className="top_div__container">
                    <h3>{`Category:Gk`}</h3>
                    <h3>{`Difficulty:easy`}</h3>
                </div>
                <div className="score_div__container">
                    <h3>{`Score:${score}`}</h3>
                </div>
            </div>
        )
    }
}

export default TextResult