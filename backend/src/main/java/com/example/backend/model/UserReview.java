package com.example.backend.model;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public class UserReview {
    private Long userId;
    private String name;
    private String content;
    private Integer likes;
    private String createdAt;

    public UserReview() {
    }

    public UserReview(Long userId, String name, String content, Integer likes, Instant createdAt) {
        this.userId = userId;
        this.name = name;
        this.content = content;
        this.likes = likes;

        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String formattedDate = formatter.format(Date.from(createdAt));

        this.createdAt = formattedDate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
