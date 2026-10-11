package mrhypix.shortify.Repository;

import mrhypix.shortify.Entity.MaliciousUrlReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaliciousUrlReportRepository
        extends JpaRepository<MaliciousUrlReport, Long> {
}