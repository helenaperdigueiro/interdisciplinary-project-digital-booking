package com.hotelbackend.controller;

import com.hotelbackend.model.Category;
import com.hotelbackend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @PostMapping
    public ResponseEntity<Category> save(@RequestBody Category category){
        return ResponseEntity.ok(service.save(category));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> editById(@RequestBody Category category, @PathVariable Integer id) {
        return ResponseEntity.ok(service.editById(category, id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<Category>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id){
        service.deleteById(id);
        return ResponseEntity.ok("Deleted");
    }
}
