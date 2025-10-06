import React, { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';

const Filters = () => {
  const { filters, setFilters, sort, setSort } = useContext(CompanyContext);

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by Name"
        value={filters.name}
        onChange={e => setFilters({ ...filters, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Search by Location"
        value={filters.location}
        onChange={e => setFilters({ ...filters, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="Search by Industry"
        value={filters.industry}
        onChange={e => setFilters({ ...filters, industry: e.target.value })}
      />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="asc">Sort A → Z</option>
        <option value="desc">Sort Z → A</option>
      </select>
    </div>
  );
};

export default Filters;
