package com.example.medical.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.medical.model.Medical;

@Repository
public interface Medicaldao extends JpaRepository<Medical, Long>{

}
