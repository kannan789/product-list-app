import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ Items, deleteItem }) => {
  function roundOff(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  return Items.map((Item) => (
    <tr key={Item.id} scope="row">
      <td>{Item.title}</td>
      <td>{Item.quantity}</td>
      <td className="roundOff">
        {"₹ "}
        {roundOff(Item.price)}
      </td>
      <td className="delete-btn" onClick={() => deleteItem(Item.id)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};
