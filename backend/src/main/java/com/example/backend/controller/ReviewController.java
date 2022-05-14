package com.example.backend.controller;

import com.example.backend.model.Review;
import com.example.backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/reviews")
    public List<Review> getAllReviews(@RequestParam(name = "bookId", required = false) Long bookId,
                                      @RequestParam(name = "userId", required = false) Long userId) {
        if (bookId != null) return reviewService.getAllReviewsByBookId(bookId);
        return reviewService.getAllReviewsByUserId(userId);
    }

    @PostMapping("/reviews")
    public Review addReview(@RequestBody Review review) {
        return reviewService.saveReview(review);
    }

    @PutMapping("/reviews/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review review) {
        return reviewService.updateReview(id, review);
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteReview(@PathVariable Long id) {
        return reviewService.deleteReview(id);
    }
}
