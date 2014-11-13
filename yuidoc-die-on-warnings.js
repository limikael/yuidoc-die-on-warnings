module.exports = function(data) {
	console.log("Checking for warnings...");

	if (data.warnings.length)
		throw new Error(data.warnings[0]);
}