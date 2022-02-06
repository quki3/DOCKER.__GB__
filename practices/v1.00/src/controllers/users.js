const User = require('../models/users.js');

exports.getAll = async (req,res,next)=>{
	try{
		const ALL = await User.findAll();
		return res.status(200).json(ALL);
	}catch (error){
		return res.status(500).json(error)
	}
}

exports.getOne = async (req,res,next)=>{
	try{
		const USER = await User.findByPk(req.params.id);
		return res.status(200).json(USER);
	}catch (error){
		return res.status(500).json(error);
	}
}

exports.createOne = async (req,res,next)=>{
	try{
		const MODEL_USER = {
			username:req.body.username,
			email:req.body.email,
			password:req.body.password
		}
		try{
			const USER_CREATED = await User.create(MODEL_USER);
			console.log('console# user created',USER_CREATED);
			return res.status(201).json(USER_CREATED);
		}catch (error){
		return res.status(500).json(error);
		}
	}catch (error){
		return res.status(500).json(error)
	}
}

exports.updateOne = async (req,res,next)=>{
	try{
		const USER_MODEL = {
			username:req.body.username,
			email:req.body.email,
			password:req.body.password
		};
		try{
		const USER_UPDATED = await User.update(USER_MODEL,{where:{id:req.params.id}});
		console.log('console# user update',USER_UPDATED)
		return res.status(200).json(USER_UPDATED);
		}catch (error){
			return res.status(500).json(error);
		}
	}catch (error){
		return res.status(500).json(error);
	}
}

exports.deleteOne = async (req,res,next)=>{
	try{
		const USER_DELETED = await User.destroy({where:{id:req.params.id}});
		console.log(`console# user id ${req.params.id} deleted`,USER_DELETED);
		return res.status(200).json(USER_DELETED);
	}catch (error){
		console.log(`console# req.params.id= ${req.params.id}`)
		return res.status(500).json(error);
	}
}
