package mrhypix.shortify.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "malicious_url_reports")
public class MaliciousUrlReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reported_url", nullable = false, length = 2048)
    private String reportedUrl;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String comment;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public MaliciousUrlReport() {
    }

    public MaliciousUrlReport(String reportedUrl, String comment) {
        this.reportedUrl = reportedUrl;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public String getReportedUrl() {
        return reportedUrl;
    }

    public void setReportedUrl(String reportedUrl) {
        this.reportedUrl = reportedUrl;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}