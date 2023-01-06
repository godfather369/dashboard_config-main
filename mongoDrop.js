const exec = require("child_process").exec;
exec("mongo RegHub --eval 'db.reg_dashboards.drop()'", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	}
});
exec("mongo RegHub --eval 'db.reg_dashboard_cubes.drop()'", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	}
});
exec("mongo RegHub --eval 'db.reg_dashboard_filters.drop()'", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	}
});
exec("mongo RegHub --eval 'db.reg_dashboard_widgets.drop()'", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	}
});
