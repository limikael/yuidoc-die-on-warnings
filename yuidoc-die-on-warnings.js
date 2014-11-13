module.exports = function(data) {
	console.log("Checking for warnings...");

	if (data.warnings.length)
		throw data.warnings[0];
}