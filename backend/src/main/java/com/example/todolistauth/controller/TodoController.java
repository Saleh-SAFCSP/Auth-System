package com.example.todolistauth.controller;

import com.example.todolistauth.dto.ApiResponse;
import com.example.todolistauth.model.Todo;
import com.example.todolistauth.model.User;
import com.example.todolistauth.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    public ResponseEntity getTodos( @AuthenticationPrincipal User user){
        return ResponseEntity.status(200).body(todoService.getTodos(user));
    }

    @PostMapping
    public ResponseEntity addTodo(@RequestBody Todo todo, @AuthenticationPrincipal User user){
        todoService.addTodo(todo,user);
        return ResponseEntity.status(201).body(new ApiResponse("New todo added !",201));
    }
}
