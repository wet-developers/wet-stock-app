package com.teamNoLackin.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.teamNoLackin.POJOS.Product;
import com.teamNoLackin.repositories.ProductRegistry;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class stockDataController {
	
	@Autowired
	private  ProductRegistry productRepository;
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/products", method = RequestMethod.GET)
	public ResponseEntity<Product> getAllProducts() {
		return (ResponseEntity<Product>) productRepository.findAll();
	}
	
	@GetMapping("/hello")
	public ResponseEntity<String> hello() {
	    return new ResponseEntity<>("Hello World!", HttpStatus.OK);
	}
	

	@RequestMapping(value="/users", method = RequestMethod.POST)
    void addUser(@RequestBody Product product) {
		productRepository.save(product);
    }
}
