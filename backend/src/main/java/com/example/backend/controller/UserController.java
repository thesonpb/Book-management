package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.UserDto;
import com.example.backend.model.UserReview;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/allusers")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public UserDto getUserById(@PathVariable String id) {
        User user = service.getUserById(Long.parseLong(id));
        UserDto returnedUser = new UserDto(user.getId(), user.getName());
        return returnedUser;
    }

    @GetMapping("/fulluser/{id}")
    public User getFullUserById(@PathVariable Long id) {
        return service.getUserById(id);
    }

    @GetMapping("/users/review/{bookId}")
    public List<User> getUserByBookId(@PathVariable Long bookId) {
        return service.getUserByBookId(bookId);

    }

    @GetMapping("/username/review/{bookId}")
    public List<UserReview> getUserNameReviewByBookId(@PathVariable Long bookId) {
        return service.findUserNameByBookId(bookId);
    }
}
