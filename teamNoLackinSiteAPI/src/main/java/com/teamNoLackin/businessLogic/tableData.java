package com.teamNoLackin.businessLogic;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;

import com.teamNoLackin.POJOS.Product;
import com.teamNoLackin.repositories.ProductRegistry;

public class tableData {

	@Autowired
    private ProductRegistry productRepository;

    @PostConstruct
    private void init(){
        
        productRepository.deleteAll();

        Product product=new Product();
        product.setName("Kamsung D3");
        product.setCode("KAMSUNG-TRIOS");
        product.setTitle("Kamsung Trios 12 inch ");
        product.setDescription("Kamsung Trios 12 Touch");
        product.setImgUrl("kamsung.jpg");
        product.setPrice(12000.00);
        productRepository.save(product);

        product=new Product();
        product.setName("Lokia Pomia");
        product.setCode("LOKIA-POMIA");
        product.setTitle("Lokia 12 inch" );
        product.setDescription("Lokia Pomia 10");
        product.setImgUrl("lokia.jpg");
        product.setPrice(9000.00);
        productRepository.save(product);
    }
}
