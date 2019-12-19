import React, { Component } from 'react'

import Articles from "./articles";
import sortingStyles from './sorting.module.scss'

class Sorting extends React.Component{
    constructor(props){
        super(props);
        this.state = { type: "all" }
    }
    render(){
        return(
            <div >
                <div className={sortingStyles.container}>
                    <ul>
                        <li activeClassName={sortingStyles.activeNavItem} onClick={() => this.setState({ type: 'all'})}>all</li>
                        <li onClick={() => this.setState({ type: 'cubed'})}>cubed</li>
                        <li onClick={() => this.setState({ type: 'id-x'})}>id-x</li>
                        <li onClick={() => this.setState({ type: 'interview'})}>interviews</li>
                        <li onClick={() => this.setState({ type: 'review'})}>reviews</li>
                        <li onClick={() => this.setState({ type: 'premiere'})}>premieres</li>
                    </ul>
                </div>
                <Articles typeValue={this.state.type} />
            </div>
           
        )
    }
}
export default Sorting