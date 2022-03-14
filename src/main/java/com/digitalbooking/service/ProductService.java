package com.digitalbooking.service;

import com.digitalbooking.model.Product;
import com.digitalbooking.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private IProductRepository repository;

    public Product save(Product product){

        return repository.save(product);
    }

    public Product editById(Product editedProduct, Integer id) {

        return repository.findById(id)
                .map(product -> {
                    product.setName(editedProduct.getName());
                    product.setDescription(editedProduct.getDescription());
                    return repository.save(product);
                })
                .orElseGet(() -> {
                    editedProduct.setIdProduct(id);
                    return repository.save(editedProduct);
                });
    }

    public Product getById(Integer idProduct){
        return repository.getById(idProduct);
    }

    public List<Product> findAll(){
        return repository.findAll();
    }

    public void deleteById(Integer idProduct) {
        repository.deleteById(idProduct);
    }

    public List<Product> findByCity(String city) {
        return repository.findByCity(city);
    }

    public List<Product> findByCategory(String category) {
        return repository.findByCategory(category);
    }
}
