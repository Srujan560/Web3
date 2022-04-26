import React, { createElement } from "react";
//returns names in autocomplete search bar
export function ProductItem({ hit, components }) {
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="uploadName" />
        </div>
      </div>
    </a>
  );
}
