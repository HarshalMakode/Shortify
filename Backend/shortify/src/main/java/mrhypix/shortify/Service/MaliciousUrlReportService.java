package mrhypix.shortify.Service;

import mrhypix.shortify.Entity.MaliciousUrlReport;
import mrhypix.shortify.Repository.MaliciousUrlReportRepository;
import org.springframework.stereotype.Service;

@Service
public class MaliciousUrlReportService {

    private final MaliciousUrlReportRepository repository;

    public MaliciousUrlReportService(
            MaliciousUrlReportRepository repository) {
        this.repository = repository;
    }

    public void submitReport(String url, String comment) {

        if (url == null || url.isBlank()
                || comment == null || comment.isBlank()) {
            throw new IllegalArgumentException(
                    "URL and comment are required.");
        }

        String cleanUrl = url.trim();
        String cleanComment = comment.trim();

        if (cleanUrl.length() > 2048) {
            throw new IllegalArgumentException(
                    "URL must not exceed 2048 characters.");
        }

        if (cleanComment.length() > 5000) {
            throw new IllegalArgumentException(
                    "Comment must not exceed 5000 characters.");
        }

        MaliciousUrlReport report =
                new MaliciousUrlReport(cleanUrl, cleanComment);

        repository.save(report);
    }
}