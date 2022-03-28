package com.digitalbooking.controller;

import com.digitalbooking.model.UserAccount;
import com.digitalbooking.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserAccountController {

    @Autowired
    private UserAccountService service;

    @PostMapping
    public ResponseEntity<UserAccount> save(@RequestBody UserAccount user) {
        return ResponseEntity.status(201).body(service.save(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserAccount> editById(@RequestBody UserAccount user, @PathVariable Integer id) {
        return ResponseEntity.ok(service.editById(user, id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserAccount> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<UserAccount>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.ok("Deleted");
    }
}
