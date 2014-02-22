$(document).ready(function(){
	populateUsers()
	populateList()
})

function populateUsers() {
	//The following is ASSUIMG classes and ids.

	user1 = {
		Name: "Geoff",
		faceUrl: "img/geoff.jpg"
	}
	user2 = {
		Name: "Kevin",
		faceUrl: "img/kevin.jpg"
	}
	user3 = {
		Name: "Joeri",
		faceUrl: "img/Joeri.img"
	}
	user4 = {
		Name: "John",
		faceUrl: "img/John.img"
	}


	users = [user1, user2, user3, user4]

	for (i=0; i<users.length; i++)
	{
		$('#userList').append("<li><a href src='"+ users[i].faceUrl+ "'>Here's " + users[i].Name + "</a></li>");
	}

}

function populateList() {

	list1 = {
		Name: "To Do",
		listUrl: "todo.jpg"

	}

	list2 = {
		Name: "What to do",
		listUrl: "whattodo.jpg"
	}

	lists = [list1,  list2]

	for (i=0; i<lists.length; i++)
	{
		$('#listList').append("<li><a href src='"+ lists[i].listUrl+ "'>Here's " + lists[i].Name + "</a></li>");
	}
}