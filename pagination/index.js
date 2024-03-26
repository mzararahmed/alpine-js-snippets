var sourceData = [
	{
		id: "1",
		employee_name: "Tiger Nixon",
		employee_salary: "320800",
		employee_age: "61",
		profile_image: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: "2",
		employee_name: "Garrett Winters",
		employee_salary: "170750",
		employee_age: "63",
		profile_image: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: "3",
		employee_name: "Ashton Cox",
		employee_salary: "86000",
		employee_age: "66",
		profile_image: "https://randomuser.me/api/portraits/men/3.jpg",
	},
	{
		id: "4",
		employee_name: "Cedric Kelly",
		employee_salary: "433060",
		employee_age: "22",
		profile_image: "https://randomuser.me/api/portraits/men/4.jpg",
	},
	{
		id: "5",
		employee_name: "Airin Satou",
		employee_salary: "162700",
		employee_age: "33",
		profile_image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: "6",
		employee_name: "Brian Williamson",
		employee_salary: "372000",
		employee_age: "61",
		profile_image: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: "7",
		employee_name: "Herrod Chandler",
		employee_salary: "137500",
		employee_age: "59",
		profile_image: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: "8",
		employee_name: "Rhone Davidson",
		employee_salary: "327900",
		employee_age: "55",
		profile_image: "https://randomuser.me/api/portraits/men/8.jpg",
	},
	{
		id: "9",
		employee_name: "Collier Hurst",
		employee_salary: "205500",
		employee_age: "39",
		profile_image: "https://randomuser.me/api/portraits/men/9.jpg",
	},
	{
		id: "10",
		employee_name: "Sony Frost",
		employee_salary: "103600",
		employee_age: "23",
		profile_image: "https://randomuser.me/api/portraits/men/10.jpg",
	},
	{
		id: "11",
		employee_name: "Jen Gaines",
		employee_salary: "90560",
		employee_age: "30",
		profile_image: "https://randomuser.me/api/portraits/men/11.jpg",
	},
	{
		id: "12",
		employee_name: "Quinn Flynn",
		employee_salary: "342000",
		employee_age: "22",
		profile_image: "https://randomuser.me/api/portraits/men/12.jpg",
	},
	{
		id: "13",
		employee_name: "Charde Marshall",
		employee_salary: "470600",
		employee_age: "36",
		profile_image: "https://randomuser.me/api/portraits/men/12.jpg",
	},
	{
		id: "14",
		employee_name: "Haley Kennedy",
		employee_salary: "313500",
		employee_age: "43",
		profile_image: "https://randomuser.me/api/portraits/men/14.jpg",
	},
	{
		id: "15",
		employee_name: "Tate Fitzpatrick",
		employee_salary: "385750",
		employee_age: "19",
		profile_image: "https://randomuser.me/api/portraits/men/15.jpg",
	},
	{
		id: "16",
		employee_name: "Michael Silva",
		employee_salary: "198500",
		employee_age: "66",
		profile_image: "https://randomuser.me/api/portraits/men/16.jpg",
	},
	{
		id: "17",
		employee_name: "Paul Byrd",
		employee_salary: "725000",
		employee_age: "64",
		profile_image: "https://randomuser.me/api/portraits/men/17.jpg",
	},
	{
		id: "18",
		employee_name: "Glorian Little",
		employee_salary: "237500",
		employee_age: "59",
		profile_image: "https://randomuser.me/api/portraits/men/18.jpg",
	},
	{
		id: "19",
		employee_name: "Bradley Greer",
		employee_salary: "132000",
		employee_age: "41",
		profile_image: "https://randomuser.me/api/portraits/men/19.jpg",
	},
	{
		id: "20",
		employee_name: "Dai Rios",
		employee_salary: "217500",
		employee_age: "35",
		profile_image: "https://randomuser.me/api/portraits/men/20.jpg",
	},
	{
		id: "21",
		employee_name: "Jene Caldwell",
		employee_salary: "345000",
		employee_age: "30",
		profile_image: "https://randomuser.me/api/portraits/men/21.jpg",
	},
	{
		id: "22",
		employee_name: "Yuri Berry",
		employee_salary: "675000",
		employee_age: "40",
		profile_image: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "23",
		employee_name: "Caesar Vance",
		employee_salary: "106450",
		employee_age: "21",
		profile_image: "https://randomuser.me/api/portraits/men/23.jpg",
	},
	{
		id: "24",
		employee_name: "Doris Wilder",
		employee_salary: "85600",
		employee_age: "23",
		profile_image: "https://randomuser.me/api/portraits/men/24.jpg",
	},
];

function loadEmployees() {
	return {
		search: "",
		pageNumber: 0,
		size: 10,
		total: "",
		myForData: sourceData,

		get filteredEmployees() {
			const start = this.pageNumber * this.size,
				end = start + this.size;

			if (this.search === "") {
				this.total = this.myForData.length;
				return this.myForData.slice(start, end);
			}

			//Return the total results of the filters
			this.total = this.myForData.filter((item) => {
				return item.employee_name
					.toLowerCase()
					.includes(this.search.toLowerCase());
			}).length;

			//Return the filtered data
			return this.myForData
				.filter((item) => {
					return item.employee_name
						.toLowerCase()
						.includes(this.search.toLowerCase());
				})
				.slice(start, end);
		},

		//Create array of all pages (for loop to display page numbers)
		pages() {
			return Array.from({
				length: Math.ceil(this.total / this.size),
			});
		},

		//Next Page
		nextPage() {
			this.pageNumber++;
		},

		//Previous Page
		prevPage() {
			this.pageNumber--;
		},

		//Total number of pages
		pageCount() {
			return Math.ceil(this.total / this.size);
		},

		//Return the start range of the paginated results
		startResults() {
			return this.pageNumber * this.size + 1;
		},

		//Return the end range of the paginated results
		endResults() {
			let resultsOnPage = (this.pageNumber + 1) * this.size;

			if (resultsOnPage <= this.total) {
				return resultsOnPage;
			}

			return this.total;
		},

		//Link to navigate to page
		viewPage(index) {
			this.pageNumber = index;
		},
	};
}
