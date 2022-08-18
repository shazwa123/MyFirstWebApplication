fetch("user.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let place = document.querySelector("#myTable");
		let out = "";
		for (let data of user) {
			out += `
			<tr>
				
				<td>${data.name}</td>
				<td>${data.age}</td>
				<td>${data.gender}</td>

             </tr>

		`;
		}

		place.innerHTML = out;
	});