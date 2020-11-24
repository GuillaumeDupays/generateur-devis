
import * as React from 'react';
const Item = (props) => {
    return (
       <React.Fragment>
           <div>
               <input type="text" name="description" value={props.item.description} onChange={evt => props.onItemChange(evt, props.item, "description")} />
           </div>
           <div>
               <input type="number" name="quantite" value={props.item.quantite} onChange={evt => props.onItemChange(evt, props.item, "quantite")} />
           </div>
           <div>
               <input type="number" name="taxe" value={props.item.taxe} onChange={evt => props.onItemChange(evt, props.item, "taxe")} />
           </div>
           <div>
               <input type="number" name="amount" value={props.item.amount} onChange={evt => props.onItemChange(evt, props.item, "amount")} />
           </div>
       </React.Fragment>
    );
};
export default Item;
