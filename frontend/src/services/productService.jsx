const BASE_URL = "https://fakestoreapi.com/products";

/**
 * GET - Ler todos os produtos
 * @returns {Promise<Array>} Lista de produtos
 */
export async function getProducts() {
    try {
        const response = await fetch (BASE_URL);
        if (!response.ok)
            throw new Error("Erro ao buscar produtos");
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Erro em getProducts:", error);
        return [];
    }
}

/**
* Get - Ler os produtos pelo id 
* @param {number} id - id do produto
* @returns {Promise<Object>} - produto encontrado
*/
export async function getProductsById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok)
            throw new Error("Erro ao buscar produto")
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Erro em getProductsById:", error);
        return null;
    }
}

/**
 *  POST -  Criar um novo produto
 * @param {Object} product - dados do produto
 * @returns {Promise<Object>} - Produto criado
 */

export async function createProduct(product){
    try {
        const response = await fetch (BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        });
        if (!response.ok)
            throw new Error ("Erro ao criar produto");
        const data = await response.json();
        return data;
    } catch (error)
    {
        console.error("Erro em createProduct:", error);
        return null;
    }
}

/**
 * PUT - Atualizar um produto 
 * 
 * @param {number} id - id do produto
 * @param {Object} product - dados do produto
 * @returns {Promise<Object>} - Produto atualzado
 */

export async function updateProduct(id, produtc){
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'applecation/json'},
            body: JSON.stringify(produtc),
        });
        if (!response.ok)
            throw new Error ("Erro ao atualizar produto")
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Erro em updateProduct:", error);
        return null;
    }
}

/**
 * DELETE - Deletar um produto
 * @param {number} id - id do produto
 * @returns {Promise<boolean>} true se excluir, false caso contrário
 */
export async function deleteProduct (id){
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok)
            throw new Error ("Erro ao deletar produto");
        return true;
    } catch (error) {
        console.error("Erro em deleteProduct:", error);
        return false
    }
}