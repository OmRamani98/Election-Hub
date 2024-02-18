package com.example.electionhub.controller;

import com.example.electionhub.model.Admin;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }



    // Other endpoints for admin functionalities

}
