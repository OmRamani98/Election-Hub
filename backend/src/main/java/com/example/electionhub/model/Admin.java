package com.example.electionhub.model;


import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Admin {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(unique = true)
        private String username;

        private String password;

        // Establishing one-to-many relationship with Election
        @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
        private Set<Election> elections;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public Set<Election> getElections() {
            return elections;
        }

        public void setElections(Set<Election> elections) {
            this.elections = elections;
        }
// Constructors, getters, and setters
    }



