package com.digitalbooking.service;

import com.digitalbooking.model.Category;
import com.digitalbooking.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private ICategoryRepository repository;

    public Category save(Category category) {
        return repository.save(category);
    }

    public Category editById(Category editedCategory, Integer id) {

        return repository.findById(id)
                .map(category -> {
                    category.setTitle(editedCategory.getTitle());
                    category.setDescription(editedCategory.getDescription());
                    category.setUrlImage(editedCategory.getUrlImage());
                    return repository.save(category);
                })
                .orElseGet(() -> {
                    editedCategory.setIdCategory(id);
                    return repository.save(editedCategory);
                });
    }

    public Category getById(Integer idCategory) {
        return repository.getById(idCategory);
    }

    public List<Category> findAll() {
        return repository.findAll();
    }

    public void deleteById(Integer idCategory) {
        repository.deleteById(idCategory);
    }
}
