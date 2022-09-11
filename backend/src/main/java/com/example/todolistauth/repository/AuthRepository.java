package com.example.todolistauth.repository;

import com.example.todolistauth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepository  extends JpaRepository<User,Integer> {
    User findUserByUsername(String username);
}
