package com.digitalbooking.service;

import com.digitalbooking.model.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserAccountService userAccountService;

    public UserAccount verifyUserAccount(UserAccount userAccount) {
        return null;
    }
}
