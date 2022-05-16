package com.example.backend.service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Book;
import com.example.backend.model.Review;
import com.example.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;


    public List<Review> getAllReviewsByBookId(Long bookId) {
        return reviewRepository.findAllByBookId(bookId);
    }

    public List<Review> getAllReviewsByUserId(Long userId) {
        return reviewRepository.findAllByUserId(userId);
    }

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    public ResponseEntity<Review> updateReview(Long id, Review review) {
        Review review1 = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("no reviews exist with id: " + id));
        review1.setBookId(review.getBookId());
        review1.setUserId(review.getUserId());
        review1.setContent(review.getContent());
        review1.setLike(review.getLike());
        Review updatedReview = reviewRepository.save(review1);
        return ResponseEntity.ok(updatedReview);
    }

    public ResponseEntity<Review> updateReviewByBookIdAndUserId(Long bookId, Long userId, Review review) {
        Review review1 = reviewRepository.findByBookIdAndUserId(bookId, userId);
        review1.setContent(review.getContent());
        review1.setLike(review.getLike());
        Review updatedReview = reviewRepository.save(review1);
        return ResponseEntity.ok(updatedReview);
    }

    public ResponseEntity<Map<String, Boolean>> deleteReview(Long id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No books exist with id:" + id));
        reviewRepository.delete(review);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, Boolean>> deleteReviewByBookIdAndUserId(Long bookId, Long userId) {
        Review review = reviewRepository.findByBookIdAndUserId(bookId, userId);
        reviewRepository.delete(review);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
