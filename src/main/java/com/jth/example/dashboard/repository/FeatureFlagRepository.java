package com.jth.example.dashboard.repository;

import com.jth.example.dashboard.domain.FeatureFlag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeatureFlagRepository extends CrudRepository<FeatureFlag, Integer> {
}
