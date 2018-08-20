package com.jth.example.dashboard.controllers;

import com.jth.example.dashboard.domain.FeatureFlag;
import com.jth.example.dashboard.repository.FeatureFlagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value="featureflags")
public class FeatureFlagController {

    @Autowired
    FeatureFlagRepository featureFlagRepository;

    @RequestMapping(value="", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<FeatureFlag> findAll(HttpServletRequest request) {
        return featureFlagRepository.findAll();
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Optional<FeatureFlag> findById(@PathVariable Integer id, HttpServletRequest request) {
        return featureFlagRepository.findById(id);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.POST)
    public Optional<FeatureFlag> findById(@PathVariable Integer id, @RequestBody FeatureFlag featureFlag, HttpServletRequest request) {
        FeatureFlag flag = featureFlagRepository.save(featureFlag);
        return Optional.of(flag);
    }

}
