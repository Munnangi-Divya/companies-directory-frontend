

import React, { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';
import CompanyCard from './CompanyCard';
import Loader from './Loader';
import Pagination from './Pagination';
import '../styles.css'; // make sure styles.css includes all updated CSS

const CompanyList = () => {
  const { filtered, loading } = useContext(CompanyContext);

  if (loading) return <Loader />;

  return (
    <>
      <div className="company-list">
        {filtered.length > 0 ? (
          filtered.map(company => <CompanyCard key={company._id} company={company} />)
        ) : (
          <div className="no-companies">
            <p>No companies found 😢</p>
          </div>
        )}
      </div>
      {filtered.length > 0 && <Pagination />}
    </>
  );
};

export default CompanyList;


