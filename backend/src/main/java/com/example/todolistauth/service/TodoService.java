package com.example.todolistauth.service;

import com.example.todolistauth.model.Todo;
import com.example.todolistauth.model.User;
import com.example.todolistauth.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> getTodos(User user){
        return todoRepository.findByUserId(user.getId());
    }

    public void addTodo(Todo todo, User user){
        todo.setUserId(user.getId());
        todoRepository.save(todo);
    }
}
