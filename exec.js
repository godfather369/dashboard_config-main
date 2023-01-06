const exec = require("child_process").exec;
exec("node script.js", (e) => {
	if (e instanceof Error) {
		console.error(e);
		throw e;
	} else {
		exec("node mongoDrop.js", (e) => {
			if (e instanceof Error) {
				console.error(e);
				throw e;
			} else {
				exec("node mongoImport.js", (e) => {
					if (e instanceof Error) {
						console.error(e);
						throw e;
					}
				});
			}
		});
	}
});
