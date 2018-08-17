package com.jth.example.dashboard.service;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SessionsService {

    @Autowired
    RestProxyService restProxyService;

    public Map<String, List<Map<String, Object>>> findChartDataByAttendees() {
        Map<String, List<Map<String, Object>>> chart = new HashMap<String, List<Map<String, Object>>>();
        List<Map<String, Object>> chartData = new ArrayList<Map<String, Object>>();
        Map<Integer, String> exerciseTypes = findSessions();
        for(Map.Entry<Integer, String> type : exerciseTypes.entrySet()) {
            chartData.add(getChartData(type));
        }
        chart.put("chartData", chartData);
        return chart;
    }

    protected Map<String, Object> getChartData(Map.Entry<Integer, String> type) {
        Map<String, Object> chartDataEntry = new HashMap<String, Object>();
        chartDataEntry.put("items", type.getValue());
        chartDataEntry.put("value", findCount(type.getKey()));
        return chartDataEntry;
    }


    private long findCount(Integer sessionId) {
        try {
            String attendeesJson = restProxyService.get("/registration/session/" + sessionId + "/attendees");
            JSONArray jsonArray = new JSONArray(attendeesJson);
            return jsonArray.length();
        } catch (JSONException e) {
            e.printStackTrace();
            return 0;
        }
    }

    private Map<Integer, String> findSessions() {
        Map<Integer, String> attendees = new HashMap<>();
        try {
            String attendeesJson = restProxyService.get("/session");
            JSONArray jsonArray = new JSONArray(attendeesJson);
            for(int i = 0; i < jsonArray.length(); i++) {
                JSONObject object = jsonArray.getJSONObject(i);
                attendees.put((Integer)object.get("id"), (String)object.get("name"));
            }
            return attendees;
        } catch (JSONException e) {
            e.printStackTrace();
            return null;
        }

    }
}
