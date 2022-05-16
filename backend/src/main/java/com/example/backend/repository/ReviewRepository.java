package com.example.backend.repository;

import com.example.backend.model.Review;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByBookId(Long bookId);
    List<Review> findAllByUserId(Long userId);
    Review findByBookIdAndUserId(Long bookId, Long userId);
//    @Query("select r from Review r where r.user.id = ?1")
//    List<User> findUserByBookId(Long bookId);
}
