import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ name: '', location: '', industry: '' });
  const [sort, setSort] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(4);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/companies');
        setCompanies(res.data);
        setFiltered(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  // Filter companies
  useEffect(() => {
    let temp = companies.filter(company =>
      company.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      company.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      company.industry.toLowerCase().includes(filters.industry.toLowerCase())
    );

    // Sort companies
    temp.sort((a, b) => sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    setFiltered(temp);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, sort, companies]);

  // Pagination
  const indexOfLast = currentPage * companiesPerPage;
  const indexOfFirst = indexOfLast - companiesPerPage;
  const currentCompanies = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / companiesPerPage);

  return (
    <CompanyContext.Provider value={{
      filtered: currentCompanies,
      loading,
      filters,
      setFilters,
      sort,
      setSort,
      currentPage,
      setCurrentPage,
      totalPages
    }}>
      {children}
    </CompanyContext.Provider>
  );
};
