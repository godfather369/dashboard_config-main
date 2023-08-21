const exec = require("child_process").exec;
exec("mongo RegHub --eval 'db.reg_map_generic.drop()'", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	}
});
exec(
	"mongoimport --uri mongodb://localhost:27017/ --db RegHub --collection reg_map_generic  reg_map_generic.json",
	(e) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
	}
);