package com.example.todolistauth.service;

import com.example.todolistauth.exception.ApiException;
import com.example.todolistauth.model.User;
import com.example.todolistauth.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthRepository authRepository;

    public void register(User user){
        String hashedPassword= new BCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashedPassword);
       authRepository.save(user);
    }
}
