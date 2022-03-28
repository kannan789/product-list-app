import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
export const View = ({Items,deleteItem}) => {
    
    return Items.map(Item=>(
        
        <tr key={Item.id}>
            <td>{Item.title}</td>
            <td>{Item.quantity}</td>
            <td>{Item.price}</td>
            <td className='delete-btn' onClick={()=>deleteItem(Item.id)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
