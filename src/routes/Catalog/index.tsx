import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "TV TOP",
  price: 2500.99,
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  categories: [
    {
      id: 1,
      name: "Eletrônicos",
    },
    {
      id: 1,
      name: "Importados",
    },
  ],
};

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
