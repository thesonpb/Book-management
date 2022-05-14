package com.example.backend.repository;

import com.example.backend.model.User;
import com.example.backend.model.UserReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u from User u join u.reviews ru where ru.bookId = ?1")
    List<User> findUserByBookId(Long bookId);

    @Query(value = "select new com.example.backend.model.UserReview(u.id, u.name, r.content, r.like, r.createdDate) from User u join u.reviews r where r.bookId = ?1")
    List<UserReview> findUserNameAndReviewByBookId(Long bookId);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);
}
