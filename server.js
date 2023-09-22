	import express, { request } from 'express';

	const PORT=3333;

	const customers=[];

	const app=express();
	app.use(express.json())

	app.get("/",(request,response)=>{
	    return response.send('IMAGESHOP');
	})


	// POST- CRIAÇÃO

	app.post("/users",(request,response)=>{
	  const {id,name,email,password}=request.body;
	  const user={id,name,email,password}
	  console.log(user) 
	  customers.push(user)

	  return response.json(user)

	  

	})
	// READ- BUSCA 
	app.get("/users",(request,response)=>{
	    
	    response.json(customers)
	})

	// READ- PARAMETRO

	app.get("/users/:id",(request,response)=>{
	   const id=Number(request.params.id)
	   const result=customers.find(p=>p.id===id)

	   return response.json(result)
	})

	app.put("/users/:id",(request,response)=>{
	    const id=Number(request.params.id)
	    const {name,email,password}=request.body

	  
	    const userIndex=customers.findIndex(user=>user.id===id)
	  
	    if(!userIndex){
	      customers[userIndex].name=name
	      customers[userIndex].email=email
	      customers[userIndex].password=password



	      response.json({messagem:"sucess"})
	    }else{
	      response.json({messagem:"user not found"})
	    }

	app.delete("/users/:id",(request,response)=>{
		const id=Number(request.params.id)
		const userIndex=customers.findIndex(user=>user.id===id)

		customers.splice(userIndex,1)

		return response.json("deletado")


		
	})
	  })
	







app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})