import React from 'react';
import { Link } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';
import { deleteProduct } from '../services/productService';

const ProductsPage = () => {
  const { products, loading } = useFetchProducts();

  const handleDelete = async (id) => {
    await deleteProduct(id);
    window.location.reload();
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Produtos</h1>
      <Link to="/products/new">Adicionar Produto</Link>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>R$ {product.price}</p>
          <Link to={`/products/${product.id}`}>Editar</Link>
          <button onClick={() => handleDelete(product.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
