package com.jth.example.dashboard.controllers;

import com.jth.example.dashboard.service.AttendeesService;
import com.jth.example.dashboard.service.SessionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(value = "/attendees")
public class AttendeesController {

    @Autowired
    AttendeesService attendeesService;

    @RequestMapping(value="/chartDataByAttendees", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, List<Map<String, Object>>> chartDataByAttendees(HttpServletRequest request) {
        return attendeesService.findChartDataByAttendees();
    }


}
