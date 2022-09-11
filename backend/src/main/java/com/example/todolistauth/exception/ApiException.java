package com.example.todolistauth.exception;

public class ApiException extends RuntimeException {

    public ApiException(String message) {
        super(message);
    }
}
