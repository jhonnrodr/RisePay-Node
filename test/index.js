
	var risePay = require('../lib/risepay');

	risePay.connect({
		username: "demo",
		password: "demo" 
	});


module.exports = function(app){

							app.get("/", function(req, res){

									 risePay.auth({
								  	NameOnCard: "Jhonny",
									CardNum : "5149612222222229",
									ExpDate : "1214",
									Amount: 10,
									CVNum: "678",
									InvNum: "ABC123",
									Zip: "33139",
									Street: "1880 Alton Road",
									Customer: "JR"
									}, function(data){
											

						  					res.send(data.json);
									});	

								});

}