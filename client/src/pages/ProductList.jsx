import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const TopContainer = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const categories = location.pathname.split("/")[2].toLowerCase();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Më të rejat");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <TopContainer>
      <Navbar />
      <Title>{categories}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Kërko produkte:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Ngjyra</Option>
            <Option>bardhe</Option>
            <Option>zeze</Option>
            <Option>kuqe</Option>
            <Option>blu</Option>
            <Option>Verdhe</Option>
            <Option>jeshile</Option>
            <Option>portokalli</Option>
          </Select>
          <Select name="categories" onChange={handleFilters}>
            <Option disabled>Kategoria</Option>
            <Option>bluze</Option>
            <Option>xhakete</Option>
            <Option>syze</Option>
            <Option>kapele</Option>
            <Option>fustan</Option>
            <Option>aksesore</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Masa</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Më të rejat</Option>
            <Option value="asc">Cmimi (asc)</Option>
            <Option value="desc">Cmimi (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products categories={categories} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </TopContainer>
  );
};

export default ProductList;
