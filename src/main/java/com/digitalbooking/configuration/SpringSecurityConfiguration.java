package com.digitalbooking.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeRequests()
                .antMatchers("/product/**")//1 pra criacao do usuario e outro para autenticar e autorizar
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .csrf()
                .disable(); //prompt

    }



//Fiz a partir daqui:
//    @Override
//    protected void configure(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity.authorizeRequests()
//                .antMatchers("/city").permitAll().antMatchers("/category")
//                .permitAll().antMatchers("/product").permitAll()
//                .anyRequest()
//                .authenticated()
//                .and()
//                .httpBasic();
//                .formLogin()
//                .loginPage("/login") //esse aqui
//                //.loginProcessingUrl("/login")
//                .defaultSuccessUrl("/")
//                .and()
//                .csrf()
//                .disable();
//    }

}
