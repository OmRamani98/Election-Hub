package com.example.electionhub.controller;

import com.example.electionhub.model.Admin;
import com.example.electionhub.repository.AdminRepository;
import com.example.electionhub.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }

    // Other endpoints for admin functionalities

}
