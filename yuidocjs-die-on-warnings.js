module.exports = function(data) {
	console.log("Checking for warnings...");

	for (var i in data.warnings) {
		var warning = data.warnings[i];

		throw warning.message;
	}
}