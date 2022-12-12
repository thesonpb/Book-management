package com.example.backend.service;

import com.example.backend.model.Review;
import com.example.backend.model.User;
import com.example.backend.model.UserReview;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getUserByBookId(Long bookId) {
        return userRepository.findUserByBookId(bookId);
    }

    public List<UserReview> findUserNameByBookId(Long bookId) {
        return userRepository.findUserNameAndReviewByBookId(bookId);
    }
}
