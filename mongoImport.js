const exec = require("child_process").exec;
exec(
	"mongoimport --uri mongodb://localhost:27017/ --db RegHub --collection reg_dashboards  reg_dashboards.json --jsonArray",
	(e) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
	}
);
exec(
	"mongoimport --uri mongodb://localhost:27017/ --db RegHub --collection reg_dashboard_cubes  reg_dashboard_cubes.json --jsonArray",
	(e) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
	}
);
exec(
	"mongoimport --uri mongodb://localhost:27017/ --db RegHub --collection reg_dashboard_filters reg_dashboard_filters.json --jsonArray",
	(e) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
	}
);
exec(
	"mongoimport --uri mongodb://localhost:27017/ --db RegHub --collection reg_dashboard_widgets reg_dashboard_widgets.json --jsonArray",
	(e) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
	}
);
