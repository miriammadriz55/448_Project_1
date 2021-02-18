class Board {
	constructor(id) {
		// Defines 10 rows and columns for game board
		this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		this.cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		this.table = document.createElement("table");
		this.table.class = "game_board";

		if (id) {
			this.table.id = id;
		} else {
			throw "error: ID is required for Board class!";
		}

		for (var i = 0; i < this.rows.length; i++) {
			var row = this.table.insertRow(i);
			row.id = this.rows[i];
			for (var j = 0; j < this.cols.length; j++) {
				var cell = row.insertCell(j);
				cell.id = id + "_" + this.cols[j] + this.rows[i];
			}
		}
		document.body.appendChild(this.table)
	}

	getCell(id) {
		return document.getElementById(this.table.id + "_" + id);
	}
}