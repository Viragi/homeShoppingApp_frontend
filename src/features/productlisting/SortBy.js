import React from 'react';

export default function SortBy(props) {
  return (
    <div>
      <label htmlFor="sortby">Sort By:</label>
      <select name="sortby" onChange={e => props.handleAPIcall(e.target.value)}>
        <option value="default">Default</option>
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}
