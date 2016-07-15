$(document).ready(function() {
	var branchname = $("input[id='id_branch_name'][type='text']");
	branchname.val("feature/" + branchname.val());
});