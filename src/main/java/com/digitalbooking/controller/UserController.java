package com.digitalbooking.controller;

import com.digitalbooking.model.User;
import com.digitalbooking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    public ResponseEntity<User> save(@RequestBody User user) {
        return ResponseEntity.status(201).body(service.save(user));

    }

    @PutMapping("/{id}")
    public ResponseEntity<User> editById(@RequestBody User category, @PathVariable Integer id) {
        return ResponseEntity.ok(service.editById(category, id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.ok("Deleted");
    }
}
