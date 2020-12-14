package com.teamNoLackin.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamNoLackin.POJOS.Product;
import com.teamNoLackin.repositories.ProductRegistry;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class stockDataController {
	
	@Autowired
	private ProductRegistry productRepository;
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	

}
