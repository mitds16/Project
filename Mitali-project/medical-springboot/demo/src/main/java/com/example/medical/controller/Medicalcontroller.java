package com.example.medical.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.medical.model.Medical;

import com.example.medical.service.Medicalservice;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class Medicalcontroller {

	@Autowired
	private Medicalservice medicalservice;
	
	@GetMapping("/cust")
	public List<Medical> getAllCustomers(){
		return medicalservice.getCustomers();
	}
	
	@PostMapping("/save")
	public Medical addCustomer( @RequestBody Medical cust) {
		medicalservice.addCustomer(cust);
		return cust;
	}
	
	
}
