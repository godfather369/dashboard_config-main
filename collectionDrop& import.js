const exec = require("child_process").exec;
exec("mongo RegHub --eval 'db.tasks.drop()'", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	}
});
exec(
	"mongoimport --uri mongodb://localhost:27017/ --db RegHub --collection tasks  tasks.json",
	(e) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
	}
);