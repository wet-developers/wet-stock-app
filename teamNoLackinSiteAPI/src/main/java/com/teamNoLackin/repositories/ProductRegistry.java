package com.teamNoLackin.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.teamNoLackin.POJOS.Product;

@RepositoryRestResource(collectionResourceRel = "productdata", 
path = "productdata")
public interface ProductRegistry extends MongoRepository<Product, String> {
	

}
