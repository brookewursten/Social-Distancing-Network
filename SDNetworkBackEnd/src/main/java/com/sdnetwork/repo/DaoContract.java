package com.sdnetwork.repo;

import java.util.List;

import javax.transaction.Transactional;

@Transactional
public interface DaoContract <T, I> {

	List<T> findAll();
	
	T findById(I i);
	
	T update(T t);
	
	T save(T t);
	
	T delete(I i);
	
	
}