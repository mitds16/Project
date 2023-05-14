package com.example.medical.service;

import java.util.List;


import com.example.medical.model.Medical;


public interface Medicalservice {

public List<Medical> getCustomers();
	
	public Medical addCustomer(Medical cust);
	
	
}
