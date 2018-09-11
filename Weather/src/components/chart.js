import _ from 'lodash'
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
//do we need to make this a class based component or function based component
//we do not need to make use of state. 
//therefore we can just make a funciton based component

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
               <SparklinesLine color={props.color} />
               <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>{average(props.data)}{props.units}</div>
        </div>
    );
}
