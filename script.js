const exec = require("child_process").exec;
exec("node migrationScriptFilters.js", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	} else {
		exec("node migrationScriptCubes.js", (e) => {
			if (e instanceof Error) {
				console.error(e);
				throw e;
			} else {
				exec("node migrationScriptWidgets.js", (e) => {
					if (e instanceof Error) {
						console.error(e);
						throw e;
					} else {
						exec("node migrationScriptDashboards.js", (e) => {
							if (e instanceof Error) {
								console.error(e);
								throw e;
							}
						});
					}
				});
			}
		});
	}
});
