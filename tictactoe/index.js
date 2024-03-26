function app() {
	return {
		turns: 0,
		won: false,
		winSeq: ["012", "345", "678", "036", "147", "258", "048", "246"],
		grid: Array.apply(null, Array(9)).map(function (v, i) {
			return null;
		}),
		xChars: ["x", "X"],
		oChars: ["o", "O"],
		xTurns: "",
		oTurns: "",
		select: function (index) {
			if (this.won || this.grid[index] !== null || this.turns >= 9) return;
			this.turns++;
			if (this.turns % 2 == 0) {
				this.grid[index] =
					this.xChars[Math.floor(Math.random() * this.xChars.length)];
				this.xTurns += index;
			} else {
				this.grid[index] =
					this.oChars[Math.floor(Math.random() * this.oChars.length)];
				this.oTurns += index;
			}
			this.checkWinner();
		},
		checkWinner: function () {
			for (let i = 0, length = this.winSeq.length; i < length; i++) {
				if (
					new RegExp(`[${this.winSeq[i]}]{3}`).test(
						this.xTurns.replace(new RegExp(`[^${this.winSeq[i]}]+`, "g"), "")
					)
				) {
					this.won = "X";
					break;
				} else if (
					new RegExp(`[${this.winSeq[i]}]{3}`).test(
						this.oTurns.replace(new RegExp(`[^${this.winSeq[i]}]+`, "g"), "")
					)
				) {
					this.won = "O";
					break;
				}
			}
			return this.won;
		},
		reset: function () {
			this.turns = 0;
			this.won = false;
			this.grid = Array.apply(null, Array(9)).map(function (v, i) {
				return null;
			});
			this.xTurns = "";
			this.oTurns = "";
		},
	};
}
