package com.example.medical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.medical.dao.Medicaldao;

import com.example.medical.model.Medical;

@Service
public class Medicalserviceimpl implements Medicalservice {

	@Autowired
	private Medicaldao medicaldao;
	
	
	public List<Medical> getCustomers() {
		// TODO Auto-generated method stub
		return medicaldao.findAll();
	}

	
	public Medical addCustomer(Medical cust) {
		// TODO Auto-generated method stub
		return medicaldao.save(cust);
	}
	


	

}
