package com.digitalbooking.controller;

import com.digitalbooking.model.UserAccount;
import com.digitalbooking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("authentication")
public class AuthenticationController {



    //2 endpoints
    //1 cria o token pegando as info do usuario (username e password)
    //1 validacao - checa se o token tah ativo

}
