# DSCommerce
[![NPM](https://img.shields.io/npm/l/react)]([https://github.com/newrodrigo/dslist/blob/main/LICENSE](https://github.com/newrodrigo/dscommerce-frontend-aulas/blob/main/LICENSE)) 

# Sobre o projeto
O sistema mantém cadastros de usuários, produtos e categorias. Os usuários têm informações pessoais e podem navegar pelo catálogo de produtos, adicionar itens ao carrinho e fazer pedidos. Administradores podem gerenciar usuários, produtos e categorias.

## Layout Mobile
![Login](https://raw.githubusercontent.com/newrodrigo/assets/9a0743685030124ab1520dcb06a40bb07fdc08d1/dscommerce/login-mobile.jpg)
![Products](https://raw.githubusercontent.com/newrodrigo/assets/9a0743685030124ab1520dcb06a40bb07fdc08d1/dscommerce/products-mobile.jpg)
![Cart](https://raw.githubusercontent.com/newrodrigo/assets/9a0743685030124ab1520dcb06a40bb07fdc08d1/dscommerce/cart-mobile.jpg)

## Layout Web
![Product-Details](https://raw.githubusercontent.com/newrodrigo/assets/9a0743685030124ab1520dcb06a40bb07fdc08d1/dscommerce/public-product-details-web.jpg)
![Admin-Products](https://raw.githubusercontent.com/newrodrigo/assets/9a0743685030124ab1520dcb06a40bb07fdc08d1/dscommerce/admin-products-web.jpg)
![Admin-Update-Product](https://raw.githubusercontent.com/newrodrigo/assets/9a0743685030124ab1520dcb06a40bb07fdc08d1/dscommerce/admin-update-product-web.jpg)


## Modelo conceitual
Este é o modelo conceitual do sistema DSCommerce. Considerações:
- Cada item de pedido (OrderItem) corresponde a um produto no pedido, com uma
quantidade. Sendo que o preço também é armazenado no item de pedido por
questões de histórico (se o preço do produto mudar no futuro, o preço do item de
pedido continua registrado com o preço real que foi vendido na época).

- Um usuário pode ter um ou mais "roles", que são os perfis de acesso deste usuário
no sistema (client, admin).

![Modelo Conceitual](https://raw.githubusercontent.com/newrodrigo/assets/main/dscommerce/conceptual%20model.jpg)

# Tecnologias utilizadas
## Front end
- HTML / CSS/ JS / TypeScript
- Axios
- JWT
- OAUTH2


# Como executar o projeto
## Frontend
Pré-requisitos: 

```bash
# clonar repositório
git clone git@github.com:newrodrigo/dscommerce-frontend-aulas.git

# entrar na pasta do projeto front end web
cd dscommerce-frontend-aulas

# instalar dependências
yarn

# executar o projeto
yarn dev
```

# Autor

Rodrigo Oliveira Cerqueira

[LinkedIn](https://www.linkedin.com/in/rodrigooc)
