package com.example.electionhub.controller;

import com.example.electionhub.model.Admin;
import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.repository.AdminRepository;
import com.example.electionhub.service.AdminService;
import com.example.electionhub.service.ElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
    @Autowired
    private AdminRepository adminRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/registration")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {
        // Simulated authentication logic, replace it with your actual authentication mechanism
        Admin savedAdmin = adminRepository.findByUsername(admin.getUsername());
        if (savedAdmin != null && savedAdmin.getPassword().equals(admin.getPassword())) {
            return "Authentication successful";
        } else {
            return "Authentication failed";
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/loginadmin/{adminusername}")
    public Admin loginAdmin(@PathVariable String adminusername) {
        return adminRepository.findByUsername(adminusername);
    }

}
