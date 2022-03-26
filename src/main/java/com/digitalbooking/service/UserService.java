package com.digitalbooking.service;

import com.digitalbooking.model.User;
import com.digitalbooking.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private IUserRepository repository;

    public User save(User user) {

        return repository.save(user);
    }

    public User editById(User editedUser, Integer id) {

        return repository.findById(id)
                .map(user -> {
                    user.setName(editedUser.getName());
                    user.setLastName(editedUser.getLastName());
                    user.setEmail(editedUser.getEmail());
                    user.setPassword(editedUser.getPassword());
                    return repository.save(user);
                })
                .orElseGet(() -> {
                    editedUser.setId(id);
                    return repository.save(editedUser);
                });
    }

    public User getById(Integer id) {
        return repository.getById(id);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}

