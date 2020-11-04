import React from 'react';
import Item from './Item';
import '../../styles/custom.css';

export default function List(props) {
    return (
        <div className = "list text-center mt-8">
            <div className = "font-bold">
                {
                    props.elemente.map((el,idx) => {
                        return <div className = "label-set"><Item key = {idx} name = {el.name} /></div>
                    })
                }
            </div>
        </div>
    )
}
