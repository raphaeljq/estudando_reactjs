import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastname="de Santo Cristo">
            <Member name="Jose" />
            <Member name="Samanto" />
        </Family>    
    </div>    
    ,document.getElementById('app'))